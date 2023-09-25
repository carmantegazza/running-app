import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MainCont from "./components/MainCont/MainCont";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
