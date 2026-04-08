<?php
// Allow all domains
header("Access-Control-Allow-Origin: *");

$headers = getallheaders();
$token = $headers['Authorization'] ?? '';

include __DIR__ . "/../../config/conn.php";
include __DIR__ . "/class.php";

// Get raw JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Merge POST + JSON safely
$data = !empty($_POST) ? $_POST : $input;

// Get action safely
$action = $data['action'] ?? '';

// Response array
$response = [
    "success" => false,
    "message" => "Invalid request"
];

$auth=new Auth($conn);
$main=new Main($conn);

switch ($action) {

    case '':
    case 'home':
        $response = [
            "status" => true,
            'user' => $auth->isLogin($data['user'],$token),
            "category" => $main->get_Category(),
            "products" => $main->promo_products()
        ];
        break;

    // ============ authentication =============

    case 'login':
        $response =$auth->Login($data);
        break;
    
    case 'register':
        $response=$auth->Register($data);
        break; 
    
    case 'facebook_login':
        $response=$auth->Register($data);
        break; 

    case 'google_login':
        $response=$auth->googleLogin($data);
        break; 

    case 'search':
        $search = $data['s'] ?? '';
        // Example response
        $response = [
            "status" => true,
            "query" => $search,
            "results" => []
        ];
        break;

    default:
        $response['message'] = "Unknown action";
        break;
}
echo json_encode($response);