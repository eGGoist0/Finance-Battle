import React from "react";
import ReactDOM from "react-dom/client";
import { Routes , Route } from 'react-router-dom';
import '../src/css/Home.css';
import "../src/css/App.css";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: false,
      mirror:true
    });
  }
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  }
}

export default App ;