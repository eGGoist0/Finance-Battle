import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";
import "../../css/Fonts.css";

import "../../assets/fonts/fluffyfont.ttf";
import "../../assets/fonts/Poppins-Bold.ttf";

class Homehd extends React.Component{
    render(){
        return(
            <header data-aos="zoom-out" data-aos-duration="1500" style={{ paddingTop:'8z0px' , display: 'flex' , justifyContent:'center' }}>
                <div id="blf" style={{ backgroundColor: '#1E3A8A', alignItems:'center'}}>
                    <p id="blftx" style={{ fontFamily: 'FluffyFont', fontWeight:'normal' , color: '#FFFFFF', textAlign: 'center', padding:'5px 15px 1px 15px' , margin:'0' }}>Finan¢e Battle$</p>
                </div>
            </header>
        )
    }
}

export default Homehd;