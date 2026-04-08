<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$headers = getallheaders();

// Extract Bearer token
$token = '';
if (!empty($headers['Authorization'])) {
    if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
        $token = $matches[1];
    }
}

include __DIR__ . "/../../config/conn.php";
include __DIR__ . "/class.php";

$input = json_decode(file_get_contents('php://input'), true);
$data = !empty($_POST) ? $_POST : ($input ?? []);

$action = $data['action'] ?? '';

$response = [
    "status" => false,
    "message" => "Invalid request"
];

$auth = new Auth($conn);
$main = new Main($conn);

switch ($action) {

    case 'home':
        $response = [
            "status" => true,
            "user" => $auth->isLogin($data['user'] ?? null, $token),
            "category" => $main->get_Category(),
            "products" => $main->promo_products()
        ];
        break;

    case 'login':
        if (empty($data['email']) || empty($data['password'])) {
            $response['message'] = "Email and password required";
            break;
        }
        $response = $auth->Login($data);
        break;

    case 'register':
        $response = $auth->Register($data);
        break;

    case 'facebook_login':
        $response = $auth->facebookLogin($data);
        break;

    case 'google_login':
        $response = $auth->googleLogin($data);
        break;

    case 'search':
        $search = $data['s'] ?? '';
        $response = [
            "status" => true,
            "query" => $search,
            "results" => $main->searchProducts($search)
        ];
        break;

    default:
        $response['message'] = "Unknown action";
        break;
}

echo json_encode($response);