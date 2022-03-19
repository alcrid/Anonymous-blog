import {useRef, useState} from "react";

function Tag(props) {
    const {id,name,form,onTagDelete} = props;
    const [isInForm,setIsInForm] = useState(form);

    const handleLinkClick = (e) => {
        if(isInForm)  {
            onTagDelete(e,id);
        }
    }

    return (
        <div className="inline-block">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={handleLinkClick} className="tag">{name}</a>
        </div>
    );
}
  
  export default Tag;
  