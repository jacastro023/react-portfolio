import Header from "./components/Header";
import Footer from "./components/footer/index.js";
import { Routes, Route, Navigate } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/home.js";
import Contact from "./pages/contact.js";
import Projects from "./pages/projects.js";
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </div>
  );
}

export default App;
