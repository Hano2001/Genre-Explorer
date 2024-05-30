import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import Recipe from "./pages/Recipe.tsx";

function App() {
  return (
    <div className="justify-center h-screen">
      <nav className="bg-orange">
        <ol className="grid grid-cols-3">
          <li><Link to="/">Home</Link></li>
          <li>2</li>
          <li>3</li>
        </ol>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:c" element={<Category />}></Route>
        <Route path="/recipe/:i" element={<Recipe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
