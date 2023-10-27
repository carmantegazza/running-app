import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { useSelector, useDispatch } from "react-redux";
import RoutesPage from "./components/RoutesPage/RoutesPage";
import RouteDetails from "./components/RouteDetails/RouteDetails";
import EventDetails from "./components/EventDetails/EventDetails";
import Stickyfooter from "./components/Sticky-footer/sticky-footer";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Snack from "./components/Snackbar/Snackbar";

export const urlBackend = "http://localhost:4000";

export default function App() {
  const dispatch = useDispatch();
  const showNav = useSelector((store) => store.appReducer.showNav);
  const user = useSelector((store) => store.userReducer.user);

  return (
    <div className="App">
      <Snack />
      <div
        className="nav_menuOpen"
        onMouseOver={() => dispatch({ type: "showNav", payload: true })}
      ></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/routes" element={<RoutesPage />}></Route>
        <Route path="/routes/:id" element={<RouteDetails />}></Route>
        <Route path="/events/:id" element={<EventDetails />}></Route>
        {!user && <Route path="/signin" element={<SignIn />} />}
        {!user && <Route path="/signup" element={<SignUp />} />}
      </Routes>
      <Stickyfooter />
    </div>
  );
}
