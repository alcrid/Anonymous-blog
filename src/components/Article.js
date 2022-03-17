import Tag from "./Tag";


function Article() {
  return (
        
    <li className="article bg-green-500">
        <h3 className="mb-2 text-lg font-medium leading-4">Article heading</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis excepturi dolorem soluta obcaecati vero eius, voluptates, consectetur et cum in sint repellendus consequuntur quod! Doloremque impedit quidem eligendi fugiat facilis?</p>
        <aside className="mt-3">
            <Tag name="school"/>
        </aside>
        <footer className="mt-4 text-left">
            <div className="controll bg-green-600 hover:bg-green-700">Like</div>
            <div className="controll bg-green-600 hover:bg-green-700">Coment</div>
            <div className="controll bg-green-600 hover:bg-green-700">Share</div>
        </footer>
    </li>

  );
}

export default Article;
