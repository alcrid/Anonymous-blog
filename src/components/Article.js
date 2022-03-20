import Tag from "./Tag";


function Article(props) {
    const {tags,content,heading} = props;

  return (
    <li className="article bg-green-500">
        <h3 className="mb-2 text-lg font-medium leading-4">{heading}</h3>
            <p>{content}</p>
        <aside className="mt-3">
            {tags.map(tag => {
                return (<Tag key={tag} name={tag} />)
            })}

        </aside>
        <footer className="mt-4 text-left">
            {/*<div className="controll">Like</div>
            <div className="controll">Comment</div>
            <div className="controll">Share</div>*/}
        </footer>
    </li>

  );
}

export default Article;
