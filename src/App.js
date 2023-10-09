import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import RoutesContainer from "./components/Routes/RoutesContainer";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/routes" element={<RoutesContainer />}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
