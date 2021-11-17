import Header from "./components/Header";
import Footer from "./components/footer/index.js";
import { Routes, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/home.js";
import Contact from "./pages/contact.js";
import Projects from "./pages/projects.js";

function App() {
  return (
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
  )};

export default App;
