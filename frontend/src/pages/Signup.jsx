import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Signup_in.css";
import "../css/Fonts.css";
import "../assets/fonts/fluffyfont.ttf";
import "../assets/fonts/Poppins-Bold.ttf";
import axios from "axios";

export default function Signup() {
  const [nickname, setNickname] = useState("");  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [message, setMessage] = useState("");  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password.length < 8) { setMessage("Пароль должен быть не меньше 8 символов"); return; }
    if (!/\d/.test(password)) { setMessage("Пароль должен содержать хотя бы одну цифру"); return; }
    if (!/[A-Z]/.test(password)) { setMessage("Пароль должен содержать хотя бы одну заглавную букву"); return; }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", { nickname, email, password });
      setMessage(res.data.msg);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);  
        localStorage.setItem("nickname", nickname);    
        navigate("/Cabinet");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) { setMessage(err.response.data.msg); } 
      else { setMessage("Registration error"); }
    }
  };

  return (
    <div data-aos="zoom-out" data-aos-duration="1500" style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', height:'100vh', color:'white', backgroundColor:'#1E3A8A', backgroundImage:'url("/images/background.svg")', backgroundBlendMode:'overlay', backgroundPosition:'center', backgroundSize:'10%', backgroundRepeat:'repeat'}}>
      <p id="signup" style={{ fontFamily:'FluffyFont'}}>Sign up</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required/><br/><br/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/><br/>
        <button type="submit" id="registbut">Registration</button>
        <p className="registlogin" style={{ color:'white', fontFamily:'Poppins', fontWeight:'bold', marginTop:'2%'}}>Have an account? <Link to="/login" className="registlogin">Log in</Link></p>
      </form>
      <p style={{ color: message.includes("успешно") ? "green" : "#FF4040", fontFamily:"Poppins", fontWeight:'bold'}}>{message}</p>
    </div>
  );
}
