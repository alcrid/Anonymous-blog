<?php

require_once "config.php";

// TODO: make alg for insert database for posts, tags and posts to tags connection table
if(isset($_POST)){
    if(valid_POST($_POST)){
        // Add post to database
        $heading = $_POST["heading"];
        $content = $_POST["content"];
        $tags = explode(",",$_POST["tags"]);

        $query = "INSERT INTO posts " . insert_values(["heading","content"],[[$heading,$content]]);
        //die(successResponse($query));
        global $database;
        if($database->query($query) != false){
            $post_id = $database->lastInsertId();

            // Insert tags to database
            $query = "INSERT INTO tags " . insert_values(["name"],tags_each_own_array(explode(",",$_POST["tags"]))) . " ON DUPLICATE KEY UPDATE name=name";

            if ($database->query($query) != false){
                // Connect tags with post
                $query = "INSERT INTO posts_to_tags " . insert_values(["tag_name","post_id"],tags_connection_array($post_id,$tags)) . " ON DUPLICATE KEY UPDATE `tag_name`=`tag_name`";
                if ($database->query($query) != false) die(success_response($post_id));
                else die(error_response("We were unable add tags to the post"));
            }
            else die(error_response("We were unable to store tags"));

        }
        else die(error_response("We were unable to store the post"));

        // TODO: if is valid tags (if there are some tags)
    }
    else{
        // Data are not valid (or at least some of them)
        die(error_response("No all or valid data provided"));
    }
}
else{
    // There are no data to save in database
    die(error_response("No POST data provided"));
}

function valid_POST($post){
    return (is_valid($post["heading"]) && is_valid($post["content"]));
}

