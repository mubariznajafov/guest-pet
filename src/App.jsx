import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Pages from "./components/Pages";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
