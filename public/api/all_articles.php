<?php

require_once "config.php";
require_once "models/Post.php";

$data = new StdClass();
$data->posts = [];

global $database;
$query = "SELECT p.*,GROUP_CONCAT(ptt.tag_name,'') AS tags FROM posts p 
INNER JOIN posts_to_tags ptt 
	ON ptt.post_id = p.id
	GROUP BY id
	ORDER BY date_created ASC LIMIT 20";

$posts = $database->query($query);
if ($posts != false){
    foreach ($posts as $post){
        $data->posts[] = new models\Post($post["id"],$post["heading"], $post["content"], explode(",", $post["tags"]));
    }

    die(success_response($data));
}
else die(error_response("Can't resolve database query"));



