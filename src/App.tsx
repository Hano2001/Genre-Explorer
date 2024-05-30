import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import Recipe from "./pages/Recipe.tsx";
import CategoryMenu from "./components/CategoryMenu.tsx";
import FetchRender from "./components/FetchRender.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <div className="justify-center h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:c" element={<Category />}></Route>
        <Route path="/recipe/:i" element={<Recipe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
