import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import Recipe from "./pages/Recipe.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <div className="flex justify-center bg-gray h-screen">
      <div className="w-5/6 justify-center h-5/6 mt-10 bg-lightyellow bg-cover">
        <Navbar />
        <div className="overflow-scroll h-full ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:c" element={<Category />}></Route>
            <Route path="/recipe/:i" element={<Recipe />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
