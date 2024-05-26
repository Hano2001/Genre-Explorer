import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import Recipe from "./pages/Recipe.tsx";

function App() {

  return (
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/:c" element={<Category/>}></Route>
    <Route path="/recipe/:i" element={<Recipe/>}></Route>
  </Routes>
  );
}

export default App;
