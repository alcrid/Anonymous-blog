import Home from "./routes/Home";

import {
  Routes,
  Route,
} from "react-router-dom";

import TheNavigation from "./components/TheNavigation";
import TheArticle from "./routes/TheArticle";

function App() {
  return (
   <div>
     <div className="overflow-x-hidden">
      <TheNavigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article" element={<TheArticle />} />
        
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p className="text-white text-center"><span className="block text-red-500 text-5xl">404</span>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>

    
   </div>
  );
}

export default App;
