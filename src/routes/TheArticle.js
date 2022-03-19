import axios from "axios";
import {  useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { TransitionGroup,CSSTransition } from "react-transition-group";
import Tag from "../components/Tag";

function TheArticle() {
  const [tags,setTags] = useState([]);
  const [tagInputValue,setTagInputValue] = useState("");
  const [articleHeadingInputValue,setArticleHeadingInputValue] = useState("");
  const [articleContentInputValue,setArticleContentInputValue] = useState("");
  const [id, setId] = useState(1);
  let navigate = useNavigate();

  const handleTagCreateSubmit = (e) =>{
    e.preventDefault();
    if(!tagsContains(tagInputValue.trim()) && tagInputValue.trim() !== ""){
      setTags([...tags,{
        id: id,
        value:removeUnwantedCharacters(tagInputValue.trim())
      }])
      setTagInputValue("")
      setId(id + 1)
    }
    
  };

  const removeUnwantedCharacters = str =>{
      let newStr = "";
      for (let i = 0; i < str.length; i++) {
          if (str.charAt(i) != ",") newStr += str.charAt(i);
      }

      return newStr;
  }

  function goOnHomePage() {
    navigate("/");
  }

  const handleTagInputChange = (e) =>{
    setTagInputValue(e.target.value)
  }

  const tagsContains = (tag) => {
    for(let i = 0; i < tags.length;i++){
      if(tag === tags[i].value){
        return true;
      }
    }

    return false;
  }

  const handleDeleteTag = (e,id) =>{
    e.preventDefault();
    setTags(
      tags.filter(tag =>{
        return tag.id !== id;
      })
    )
  }

  const handlePostArticleSubmit = (e) => {
      e.preventDefault();

      if(articleHeadingInputValue.trim() === "" || articleContentInputValue.trim() === "") return false;
      const params = new URLSearchParams();
      params.append('heading', articleHeadingInputValue);
      params.append('content', articleContentInputValue);
      params.append('tags', generateArrayOf(tags,'value').join(","));

      axios({
        method: "post",
        url: "http://localhost:80/api/add.php",
        data: params
      })
      .then(response => {
        console.log(response);
        //response = JSON.parse(response);
        if(response.status === 200 && response.data.state === "Success"){
          goOnHomePage();
        }
        else{
          alert("Error - " + response.data.reason)
        }
      })
      .catch(error => {
        console.log(error)
      });
  }

  const generateArrayOf = (array,value) =>{
    let newArr = [];
    for(let i = 0;i < array.length; i++){
      newArr.push(array[i][value]);
    }

    return newArr;
  }

  const handleArticleHeadingChange = (e) => {
    setArticleHeadingInputValue(e.target.value);
  }

  const handleArticleContentChange = (e) => {
    setArticleContentInputValue(e.target.value);
  }

  return (

      <div className="px-5">
        <div className="the-article ">
        <h4 className="my-3 text-xl font-medium">Submit your article <span className=" border-b-2 border-dotted border-white">anonymously</span></h4>
        <input onChange={handleArticleHeadingChange} value={articleHeadingInputValue} className="input" type="text" placeholder="Heading"/>
        <textarea onChange={handleArticleContentChange} value={articleContentInputValue} className="textarea" placeholder="Article text insert here"></textarea>
        {/* <Tag name="school" />*/}

        <TransitionGroup component="footer" className="py-3">
      
            {tags.map(item => {
              return (
                <CSSTransition key={item.id} timeout={200} classNames="tag">
                  <Tag key={item.id} id={item.id} form={true} onTagDelete={handleDeleteTag} name={item.value} className="ml-2" />
                </CSSTransition>
              ) 
          })}
        </TransitionGroup>
        
        <form onSubmit={handleTagCreateSubmit} className="add-tag-button">
          <div>#</div>
          <input onChange={handleTagInputChange} value={tagInputValue} placeholder="Tag name" />
        </form>

        <form onSubmit={handlePostArticleSubmit} className="flex justify-start items-center mt-5">
          <button className="button" type="submit">Post this!</button>
          <Link to="/" className="text-red-400 ml-3">Discard</Link>
        </form>
      </div>
      </div>
  );
}

export default TheArticle;
