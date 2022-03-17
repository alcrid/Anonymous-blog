import { useEffect } from "react";


function Tag(props) {
    const {name,form,handleTagDelete} = props;

    useEffect(()=>{
        console.log(form);
    })

    return (    
        <a onClick={form ? handleTagDelete : () =>{}} href="#" className="tag bg-green-600 hover:bg-green-700">{name}</a>  
    );
  }
  
  export default Tag;
  