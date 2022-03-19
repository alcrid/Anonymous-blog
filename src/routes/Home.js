import Article from '../components/Article';
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:80/api/all_articles.php"
        })
            .then(response => {
                console.log(response);
                //response = JSON.parse(response);
                if(response.status === 200 && response.data.state === "Success"){
                    setPosts(response.data.result.posts)

                }
                else{
                    alert("Error - " + response.data.reason)
                }
            })
            .catch(error => {
                console.log(error)
            });
    }, []);


  return (
    <ul className="grid max-w-4xl mx-auto md:grid-cols-2">
        {posts.map( post => {
            return(
                <Article key={post.id} heading={post.heading} content={post.content} tags={post.tags} />
            )
        })}

    </ul>
  );
}

export default Home;
