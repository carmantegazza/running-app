import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import RoutesPage from "./components/RoutesPage/RoutesPage";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/routes" element={<RoutesPage />}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
