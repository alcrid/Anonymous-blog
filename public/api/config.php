<?php
// URL's
const BASE_URL = "http://localhost:80/";
error_reporting(E_ERROR | E_PARSE);
cors();

// DB connection
$server_name = "localhost";
$user_name = "root";
$password = "root";
$database_name = "anonymous_blog";

$database = new PDO("mysql:host=$server_name;port=3306;dbname=$database_name;charset=utf8", $user_name, $password);


// ** FUNCTIONS **
// Responses
function error_response($reason){
    $response = new stdClass();
    $response->state = "Error";
    $response->reasson = $reason;
    cors();
    return json_encode($response);
}

function success_response($data){
    $response = new stdClass();
    $response->state = "Success";
    $response->result = $data;
    cors();
    return json_encode($response);
}

//Url's

function get_url($url) {
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

// Validation
function is_valid($item){
    if ( isset($item) && $item != null ) {
        if (is_array($item) && count($item) > 0) return true;
        if (is_string($item) && strlen(trim($item)) != 0) return true;
        if (is_numeric($item) && $item >= 0) return true;
        if (is_object($item)) return true;
    }

    return false;

}

// DB helpers

function insert_values($keys, $values){
    if (is_array($values)){
        $vals = "";

        for ($i = 0;$i < count($values); $i++){
            if ($i != 0){
                $vals .= ",";
            }

            $vals .= db_values_stringify($values[$i]);

        }

        return  db_keys_stringify($keys) . " VALUES " . $vals;
    }else return  db_keys_stringify($keys) . " VALUE " . db_values_stringify($values);


}

function variable_name($var) {
    foreach($GLOBALS as $var_name => $value) {
        if ($value === $var) {
            return $var_name;
        }
    }

    return false;
}

function db_values_stringify($arr){
    $str = "(";

    for ($i = 0; $i < count($arr); $i++){
        if ($i != 0) $str .= ",";

        $item = $arr[$i];
        if (is_string($item)){
            $str .= "'" . $item . "'";
        }
        else $str .= $item;
    }

    return $str . ")";
}

function db_keys_stringify($arr){
    $str = "(";

    for ($i = 0; $i < count($arr); $i++){
        if ($i != 0) $str .= ",";

        $str .= "`" . $arr[$i] . "`";
    }

    return $str . ")";
}

function tags_connection_array($post_id, $tags_id_arr){
    $arr = [];
    for ($i = 0; $i < count($tags_id_arr); $i++){

        array_push($arr,[$tags_id_arr[$i],$post_id]);
    }

    return $arr;
}

function tags_each_own_array($array){
    $arr = [];
    for ($i = 0; $i < count($array); $i++){

        array_push($arr,[$array[$i]]);
    }

    return $arr;
}
