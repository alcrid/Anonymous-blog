

function Tag(props) {
    const {name} = props;

    return (    
        <a href="#" className="tag bg-green-600 hover:bg-green-700">{name}</a>  
    );
  }
  
  export default Tag;
  