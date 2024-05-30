import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import Recipe from "./pages/Recipe.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="flex justify-center h-screen bg-black">
      <div className="w-5/6 justify-center h-5/6 mt-10 bg-lightyellow">
        <Navbar />
        <div className="h-full ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:c" element={<Category />}></Route>
            <Route path="/recipe/:i" element={<Recipe />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
