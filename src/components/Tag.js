import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";


function Tag(props) {
    const {id,name,form,onTagDelete} = props;

    useEffect(()=>{
        
    })

    return (    
        <a onClick={form ? (e) => {onTagDelete(e,id)} : (e) =>{}} href="#" className="tag bg-green-600 hover:bg-green-700">{name}</a>  
    );
  }
  
  export default Tag;
  