import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

import Home from "./page/Home";
import About from "./page/About";
import Login from "./page/login";
import Signup from "./page/Signup";
import ProductDetail from "./page/ProductDetail";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

