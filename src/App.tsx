import { Route, Routes } from "react-router-dom";
import "./App.css";
import FetchRender from "./components/FetchRender.tsx";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";

function App() {

  return (
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/:c" element={<Category/>}></Route>
  </Routes>
  );
}

export default App;
