import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import TechStack from "./pages/tech-stack";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode]=useState(false)
  const darkmode=()=>{
    setDarkMode(true)
  }
  const lightmode=()=>{
    setDarkMode(false)
  }
  return (
    <div className={`${darkMode?"bg-black":"bg-white"} text-cyan-700  min-h-screen max-h-full p-2 sm:p-0`}>
      <Navbar darkMode={darkMode} darkmode={darkmode} lightmode={lightmode} />
      <Routes>
        <Route path="/porfolio" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stack" element={<TechStack />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
