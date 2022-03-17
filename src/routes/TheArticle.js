import { useRef, useState } from "react";
import Tag from "../components/Tag";

function TheArticle() {
  const [tags,setTags] = useState([]);
  const input = useRef();
  const [id, setId] = useState(1);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!tagsContains(input.current.value.trim())){
      setTags([...tags,{
        id: id,
        value:input.current.value.trim()
      }])
      input.current.value = "";
      setId(id + 1)
    }
    
  };

  const tagsContains = (tag) => {
    for(let i = 0; i < tags.length;i++){
      if(tag === tags[i].value){
        return true;
      }
    }

    return false;
  }

  const deleteTag = (e) =>{
    setTags(
      tags.filter(item =>{
        return item.value !== e.target.innerHTML;
      })
    )
  }

  return (

      <div className="px-5">
        <div className="the-article ">
        <h4 className="my-3 text-xl font-medium">Submit your article <span className=" border-b-2 border-dotted border-white">anonymously</span></h4>
        <input className="input" type="text" placeholder="Heading"/>
        <textarea className="textarea" placeholder="Article text insert here"></textarea>
        {/* <Tag name="school" />*/}

        <footer className="py-3">
          {tags.map(item => {
            return <Tag key={item.id} form={true} handleTagDelete={deleteTag} name={item.value} className="ml-2" />
          })}
        </footer>
        
        <form onSubmit={handleSubmit} className="add-tag-button">
          <div>#</div>
          <input ref={input} placeholder="Tag name" />
        </form>
      </div>
      </div>
  );
}

export default TheArticle;
