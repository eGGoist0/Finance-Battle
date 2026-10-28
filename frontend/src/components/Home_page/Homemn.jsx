import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";
import "../../css/Fonts.css";

import "../../assets/fonts/fluffyfont.ttf";
import "../../assets/fonts/Poppins-Bold.ttf";

class Homemn extends React.Component{
    render(){
        return(
            <main data-aos="zoom-out" data-aos-duration="1500">
            
            <div>
                <p id="d1" style={{fontFamily: 'FluffyFont', fontWeight:'normal' , color: '#FFFFFF', textAlign: 'center'}} >Improve your knowledge</p>
                <p id="d2" style={{fontFamily: 'Poppins', fontWeight:'bold', color: '#FFFFFF' , textAlign:'center'}} >Compete with others in finance and business challenges, that test your strategy and knowledge.</p>
            </div>
            
            <div className="auth" style={{textAlign:'center'}}>
                <Link to="/signup" className="signup">
                <a>Sign Up</a>
                </Link>
                <p className="login" style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 'bold'}}>
                    Have an account?{' '}
                    <Link to="/login" className="login">
                    Log in
                    </Link>
                </p>
            </div>
            
            </main>
        )
    }
}

export default Homemn; 