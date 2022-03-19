<?php

namespace models;

class Post
{
    public $id,$heading,$content,$tags;

    /**
     * @param $heading
     * @param $content
     * @param $tags
     * @param $id
     */
    public function __construct($id,$heading, $content, $tags)
    {
        $this->id = $id;
        $this->heading = $heading;
        $this->content = $content;
        $this->tags = $tags;
    }




}