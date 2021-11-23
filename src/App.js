import Header from "./components/Header";
import Footer from "./components/footer/index.js";
import { Routes, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/home.js";
import Contact from "./pages/contact.js";
import Projects from "./pages/projects.js";
import BarLoader from "react-spinners/BarLoader";
import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
 
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
     setLoading(true);
     setTimeout(()=> {
       setLoading(false);
      }, 2000);
  }, []);

  return (
      <div>
        {loading ? (
          <div className="App">
          <BarLoader color={"#010101"} loading={loading}  size={150} />
          </div>
        ) : (
          <div>
        <Header />
        <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Home" element={<Home />}/>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
        </Wrapper>
        <Footer />
        </div>
        )}
      </div>
  )};

export default App;
