import { useEffect, useState } from "react";


function Tag(props) {
    const {id,form,onTagDelete} = props;
    const [isInForm,setIsInForm] = useState(form);
    const name = useState(props.name);

    const handleLinkClick = (e) => {
        if(isInForm)  {
            onTagDelete(e,id);
        }
    }

    return (    
        <a href="#" onClick={handleLinkClick} className="tag bg-green-600 hover:bg-green-700">{name}</a>  
    );
}
  
  export default Tag;
  