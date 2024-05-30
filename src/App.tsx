import {Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import Recipe from "./pages/Recipe.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <div className="flex justify-center bg-gray h-screen">
      <div className="bg-light h-[90%] w-5/6 justify-center overflow-scroll">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:c" element={<Category />}></Route>
          <Route path="/recipe/:i" element={<Recipe />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
