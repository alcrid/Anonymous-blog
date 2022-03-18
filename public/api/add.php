<?php

require_once "config.php";

var_dump($_POST);

if(isset($_POST)){
    if(validPOST($_POST)){

    }
    else{
        die(errorResponse("No all or valid data provided"));
    }
}
else{
    die(errorResponse("No POST data provided"));
}

function validPOST($post){
    return true;
}

