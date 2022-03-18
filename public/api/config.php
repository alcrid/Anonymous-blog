<?php
// URL's
const BASE_URL = "http://localhost:80/";

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
    return json_encode($response);
}

function successResponse($data){
    $response = new stdClass();
    $response->state = "Success";
    $response->result = $data;
    return json_encode($response);
}

//Url's

function getUrl($url) {
    return BASE_URL . $url;
}

