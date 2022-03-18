<?php
// URL's
const BASE_URL = "http://localhost:80/";
cors();

// DB connection
$server_name = "localhost";
$user_name = "root";
$password = "root";
$database_name = "anonymous_blog";

$database = new PDO("mysql:host=$server_name;port=3306;dbname=$database_name;charset=utf8", $user_name, $password);


// ** FUNCTIONS **
// Responses
function errorResponse($reason){
    $response = new stdClass();
    $response->state = "Error";
    $response->reasson = $reason;
    cors();
    return json_encode($response);
}

function successResponse($data){
    $response = new stdClass();
    $response->state = "Success";
    $response->result = $data;
    cors();
    return json_encode($response);
}

//Url's

function getUrl($url) {
    return BASE_URL . $url;
}

// CORS
function cors() {

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");


    }

}
