import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Signup_in.css";
import "../css/Fonts.css";

import "../assets/fonts/fluffyfont.ttf";
import "../assets/fonts/Poppins-Bold.ttf";

import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      setMessage(res.data.message);

      if (res.data.success) {
         localStorage.setItem("token", res.data.token);

        navigate("/Cabinet");
      }

    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Autorization error");
      }
    }
  };

  return (
    <div data-aos="zoom-out" data-aos-duration="1500" style={{ display:'flex', flexDirection:'column' ,justifyContent:'center' , alignItems:'center' , textAlign:'center' , height:'100vh' , color:'white' , backgroundColor:'#1E3A8A' , backgroundImage: 'url("/images/background.svg")' , backgroundBlendMode:'overlay', backgroundPosition:'center' , backgroundSize:'10%' , backgroundRepeat:'repeat'}}>
      
      <p id="login" style={{fontFamily:'FluffyFont'}}>Log in</p>
      
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/><br/>

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/><br/>

        <button type="submit" id="registbut">Authorization</button>
          
          <p className="registlogin" style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 'bold' ,  marginTop:'2%' }}>
            Haven't an account?{' '}
            
            <Link to="/Signup" className="registlogin">
              Sign up
            </Link>
          
          </p>
      </form>
      <p style={{ color: message.includes("exists") ? "green" : "#FF4040" , fontFamily:"Poppins", fontWeight:'bold'}}>{message}</p>
    </div>
  );
}
