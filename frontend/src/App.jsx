import React from "react";
import { Routes , Route } from 'react-router-dom';

import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Cabinet from "./pages/Profile.jsx"; 

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
          <Route path="/cabinet" element={<Cabinet />} />
        </Routes>
      </div>
    );
  }
}

export default App ;