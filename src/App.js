import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import RoutesPage from "./components/RoutesPage/RoutesPage";
import RouteDetails from "./components/RouteDetails/RouteDetails";
import EventDetails from "./components/EventDetails/EventDetails";
import Stickyfooter from "./components/Sticky-footer/sticky-footer";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/routes" element={<RoutesPage />}></Route>
          <Route path="/routes/:id" element={<RouteDetails />}></Route>
          <Route path="/events/:id" element={<EventDetails />}></Route>
          </Routes>
        <Stickyfooter/>
    </BrowserRouter>
  );
}

export default App;
