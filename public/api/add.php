<?php

require_once "config.php";

if(isset($_POST)){
    if(validPOST($_POST)){
        die(successResponse("No all or valid data provided"));
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

