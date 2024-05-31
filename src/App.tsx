import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import Recipe from "./pages/Recipe.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Random from "./pages/Random.tsx";

function App() {
  return (
    <div className="flex flex-col justify-center  h-screen bg-black">
      <div className="w-5/6 h-5/6 self-center">
        <Navbar />
        <div className="h-full ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/random" element={<Random />}></Route>
            <Route path="/:c" element={<Category />}></Route>
            <Route path="/recipe/:i" element={<Recipe />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
