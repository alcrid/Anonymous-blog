import Tag from "../components/Tag";

function TheArticle() {
  return (

      <div className=" the-article ">
        <input className="input" type="text" placeholder="Heading"/>
        <textarea className="textarea" placeholder="Article text insert here"></textarea>
        {/* <Tag name="school" />*/}
        
        <button className="add-tag-button">
          Add #
        </button>
      </div>
  );
}

export default TheArticle;
