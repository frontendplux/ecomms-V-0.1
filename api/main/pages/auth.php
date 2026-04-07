<?php
class Auth {
    private $conn;
    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function isLogin($user_id, $token) {
        $user_id = trim($user_id ?? 0);
        $token = trim($token ?? '');

        // Prepare statement
        $sql = "SELECT * FROM main_users WHERE id = ? AND uid = ? LIMIT 1";
        $stmt = $this->conn->prepare($sql);

        if (!$stmt) {
            return [
                "success" => false,
                "error" => $this->conn->error
            ];
        }

        // Bind parameters
        $stmt->bind_param("is", $user_id, $token); // i=int, s=string
        $stmt->execute();

        $result = $stmt->get_result();
        if ($result && $result->num_rows > 0) {
            return [
                "success" => true,
                "data" => $result->fetch_assoc()
            ];
        }

        return ["success" => false, "data" => null];
    }
     

public function Login($data = []) {
    $email = trim($data['email'] ?? '');
    $pass = trim($data['pass'] ?? '');

    // Prepare select statement
    $smt = $this->conn->prepare("SELECT * FROM main_users WHERE email=? LIMIT 1");
    $smt->bind_param('s', $email);
    $smt->execute();
    $res = $smt->get_result();

    // Generate token safely
    $email_user = explode("@", $email)[0];
    $token = uniqid($email_user . '_');

    if ($res->num_rows) {
        $user = $res->fetch_assoc();

        if (password_verify($pass, $user['password'])) {
            // Update token in DB
            $smt = $this->conn->prepare("UPDATE main_users SET uid=? WHERE id=? LIMIT 1");
            $smt->bind_param('si', $token, $user['id']);
            $smt->execute();

            return [
                'success' => true,
                'message' => 'Welcome back!',
                'token' => $token,
                'user_id' => $user['id']
            ];
        } else {
            return [
                'success' => false,
                'message' => 'Invalid email or password! Unable to validate account'
            ];
        }
    } else {
        return [
            'success' => false,
            'message' => 'Invalid email or password! Unable to validate account'
        ];
    }
}


public function Register($data = []) {
    $firstName = trim($data['firstName'] ?? '');
    $lastName = trim($data['lastName'] ?? '');
    $email = trim($data['email'] ?? '');
    $password = trim($data['password'] ?? '');
    $phone = trim($data['phone'] ?? '');
    $newsletter = isset($data['newsletter']) ? 1 : 0;

    // Basic validation
    if (!$firstName || !$lastName || !$email || !$password || !$phone) {
        return [
            'success' => false,
            'message' => 'All fields are required!'
        ];
    }

    // Check if email already exists
    $smt = $this->conn->prepare("SELECT id FROM main_users WHERE email=? LIMIT 1");
    $smt->bind_param('s', $email);
    $smt->execute();
    $res = $smt->get_result();

    if ($res->num_rows) {
        return [
            'success' => false,
            'message' => 'Email already registered!'
        ];
    }

    // Hash password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    // Generate secure token
    $token = uniqid(explode('@', $email)[0].'_');
    // Insert new user
    $smt = $this->conn->prepare("
        INSERT INTO main_users (uid, firstname, lastname, email, phone, password, is_news_letter)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ");
    $smt->bind_param(
        'ssssssi',
        $token,
        $firstName,
        $lastName,
        $email,
        $phone,
        $hashedPassword,
        $newsletter
    );

    if ($smt->execute()) {
        return [
            'success' => true,
            'message' => 'Account created successfully!',
            'token' => $token,
            'user_id' => $this->conn->insert_id
        ];
    } else {
        return [
            'success' => false,
            'message' => 'Registration failed. Try again.'
        ];
    }
}


public function facebookLogin($data = []) {
    $fb_id = $data['fb_id'] ?? '';
    $email = $data['email'] ?? '';
    $name = $data['name'] ?? '';

    if (!$fb_id) {
        return ['success' => false, 'message' => 'Invalid Facebook login'];
    }

    // Split name
    $nameParts = explode(' ', $name);
    $firstName = $nameParts[0] ?? '';
    $lastName = $nameParts[1] ?? '';

    // Check if user exists
    $smt = $this->conn->prepare("SELECT * FROM main_users WHERE email=? LIMIT 1");
    $smt->bind_param('s', $email);
    $smt->execute();
    $res = $smt->get_result();

    $token = uniqid(explode('@', $email)[0].'_');

    if ($res->num_rows) {
        $user = $res->fetch_assoc();

        // Update token
        $smt = $this->conn->prepare("UPDATE main_users SET uid=? WHERE id=?");
        $smt->bind_param('si', $token, $user['id']);
        $smt->execute();

        return [
            'success' => true,
            'token' => $token,
            'user_id' => $user['id']
        ];
    } else {
        // Create new user
        $smt = $this->conn->prepare("
            INSERT INTO main_users (uid, first_name, last_name, email, password)
            VALUES (?, ?, ?, ?, ?)
        ");
        $smt->bind_param('sssss', $token, $firstName, $lastName, $email, $fb_id);
        $smt->execute();

        return [
            'success' => true,
            'token' => $token,
            'user_id' => $this->conn->insert_id
        ];
    }
}

public function googleLogin($data = []) {
    $token = $data['token'] ?? '';

    if (!$token) {
        return ['success' => false, 'message' => 'Invalid Google login'];
    }

    // Verify token with Google
    $url = "https://oauth2.googleapis.com/tokeninfo?id_token=" . $token;
    $response = file_get_contents($url);

    if (!$response) {
        return ['success' => false, 'message' => 'Google verification failed'];
    }

    $googleUser = json_decode($response, true);

    // Validate response
    if (!isset($googleUser['email'])) {
        return ['success' => false, 'message' => 'Invalid Google token'];
    }

    $email = $googleUser['email'];
    $name = $googleUser['name'] ?? '';
    $google_id = $googleUser['sub']; // unique Google user ID

    // Split name
    $nameParts = explode(' ', $name);
    $firstName = $nameParts[0] ?? '';
    $lastName = $nameParts[1] ?? '';

    // Check if user exists
    $smt = $this->conn->prepare("SELECT * FROM main_users WHERE email=? LIMIT 1");
    $smt->bind_param('s', $email);
    $smt->execute();
    $res = $smt->get_result();

    $session_token = uniqid(explode('@', $email)[0] . '_');

    if ($res->num_rows) {
        $user = $res->fetch_assoc();

        // Update session token
        $smt = $this->conn->prepare("UPDATE main_users SET uid=? WHERE id=?");
        $smt->bind_param('si', $session_token, $user['id']);
        $smt->execute();

        return [
            'success' => true,
            'token' => $session_token,
            'user_id' => $user['id']
        ];
    } else {
        // Create new user
        $smt = $this->conn->prepare("
            INSERT INTO main_users (uid, first_name, last_name, email, password)
            VALUES (?, ?, ?, ?, ?)
        ");
        $smt->bind_param('sssss', $session_token, $firstName, $lastName, $email, $google_id);
        $smt->execute();

        return [
            'success' => true,
            'token' => $session_token,
            'user_id' => $this->conn->insert_id
        ];
    }
}

}