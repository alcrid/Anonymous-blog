import Tag from "../components/Tag";

function TheArticle() {
  return (

      <div className="ma max-w-4xl x-w-4xl the-article ">
        <input className="input" type="text" placeholder="Heading"/>
        <textarea className="textarea" placeholder="Article text insert here"></textarea>
        {/* <Tag name="school" />*/}
        <Tag name="Hello" />
        <button className="add-tag-button">
          Add #
        </button>
      </div>
  );
}

export default TheArticle;
