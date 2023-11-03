import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { useSelector, useDispatch } from "react-redux";
import RoutesPage from "./components/RoutesPage/RoutesPage";
import RouteDetails from "./components/RouteDetails/RouteDetails";
import EventDetails from "./components/EventDetails/EventDetails";
import Stickyfooter from "./components/Sticky-footer/sticky-footer";
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Snack from './components/Snackbar/Snackbar';
import { useEffect } from "react";

export const urlBackend = "http://localhost:4000";
export default function App() {

const user = useSelector((store) => store.userReducer.user);
const userToken = localStorage.getItem('token') 

useEffect(() => {
  if(userToken !== null){
    console.log('Usuario Logueado')}
    else{
      console.log('Usuario no Logueado')
    }
  },[])
  
  return (
    <div className="App">
      <Snack />
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
