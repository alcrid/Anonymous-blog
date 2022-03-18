import {  useState } from "react";
import { Link } from "react-router-dom";
import { TransitionGroup,CSSTransition } from "react-transition-group";
import Tag from "../components/Tag";

function TheArticle() {
  const [tags,setTags] = useState([]);
  const [tagInputValue,setTagInputValue] = useState("");
  const [id, setId] = useState(1);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!tagsContains(tagInputValue.trim())){
      setTags([...tags,{
        id: id,
        value:tagInputValue.trim()
      }])
      setTagInputValue("")
      setId(id + 1)
    }
    
  };

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
    console.log(id)
    setTags(
      tags.filter(tag =>{
        return tag.id !== id;
      })
    )
    console.log(tags)
  }

  return (

      <div className="px-5">
        <div className="the-article ">
        <h4 className="my-3 text-xl font-medium">Submit your article <span className=" border-b-2 border-dotted border-white">anonymously</span></h4>
        <input className="input" type="text" placeholder="Heading"/>
        <textarea className="textarea" placeholder="Article text insert here"></textarea>
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
        
        <form onSubmit={handleSubmit} className="add-tag-button">
          <div>#</div>
          <input onChange={handleTagInputChange} value={tagInputValue} placeholder="Tag name" />
        </form>

        <form className="flex justify-start items-center mt-5">
          <button className="button" type="submit">Post this!</button>
          <Link to="/" className="text-red-400 ml-3">Discard</Link>
        </form>
      </div>
      </div>
  );
}

export default TheArticle;
