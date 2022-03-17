import { Link } from "react-router-dom";

function TheNavigation() {
  return (
    <nav className="nav p-5 flex justify-center">
        <Link to="/article" className="h-7 inline-block absolute right-5 top-5">
            <img className="h-7" src="logo.svg" alt="logo" />
        </Link>
        <Link to="/" >
         <h2 className="text-xl font-bold text-center text-white">Anonymous Articles </h2>
        </Link>
        
    </nav>
  );
}

export default TheNavigation;
