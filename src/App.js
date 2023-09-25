import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MainCont from "./components/MainCont/MainCont";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<MainCont />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
