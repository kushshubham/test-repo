import logo from "./logo.svg";
import "./App.css";
import LoginSignup from "./Components/Login-Page/LoginSignup";
import Signup from "./Components/Signup-Page/Signup";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<LoginSignup />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/" element={<LoginSignup />} />
    </Routes>
  );
}

export default App;
