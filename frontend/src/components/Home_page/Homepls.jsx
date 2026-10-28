import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";
import "../../css/Fonts.css";

import "../../assets/fonts/fluffyfont.ttf";
import "../../assets/fonts/Poppins-Bold.ttf";

class Homepls extends React.Component {
    render(){
        return(
            <footer className="footer">
            
            {/*КАРТИНКA 1*/}
            <div className="container-fluid"  id="exmp" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <div className="row align-items-center justify-content-center">
                <div className="col-5 offset-1" id="txt">
                    <p id="txt1" className="text-white" style={{fontFamily:'FluffyFont' ,fontWeight:'regular'}}>Learn someting new</p>
                    <p id="txt2" className="text-white" style={{fontFamily:'Poppins' ,fontWeight:'large',maxWidth:'90%'}}>Play and learn to new things in the sphere of finance and business.</p>
                </div>
                <div className="col-5 " id="img">
                    <img className="img-fluid" id="imgs" src="/images/learn.jpg" style={{width:'30vw' , borderRadius:'3vw'}} />
                </div>
                </div>
            </div>

            {/*КАРТИНКA 2*/}
            <div className="container-fluid" id="exmp" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <div className="row align-items-center justify-content-center">
                <div className="col-5 offset-1" id="img">
                    <img className="img-fluid" id="imgs" src="/images/compete.jpg" style={{ width: '30vw', borderRadius: '3vw' }} alt="Compete"/>
                </div>  
                <div className="col-5" id="txt">
                    <p id="txt1" className="text-white" style={{ fontFamily: 'FluffyFont', fontWeight: 'regular' }}>Compete with people</p>
                    <p id="txt2" className="text-white" style={{ fontFamily: 'Poppins', fontWeight: 'regular' }}>Compete with random people from entire world in battles and win.</p>
                </div>
                </div>
            </div>

            {/*КАРТИНКA 3*/}
            <div className="container-fluid" id="exmp" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <div className="row align-items-center justify-content-center">
                <div className="col-5 offset-1" id="txt">
                    <p id="txt1" className="text-white" style={{fontFamily:'FluffyFont' ,fontWeight:'regular'}}>Become a winner</p>
                    <p id="txt2" className="text-white" style={{fontFamily:'Poppins' ,fontWeight:'large'}}>Win and raise your rating to show other people how your smart.</p>
                </div>
                <div className="col-5 " id="img">
                    <img className="img-fluid" id="imgs" src="/images/trophy.jpg" style={{width:'30vw', borderRadius:'3vw'}} />
                </div>
                </div>
            </div>

            {/*FINANCE BATTLE*/}
            <div id="finend" style={{ textAlign: 'center', paddingBottom: '2%' }}>
                <img src="/images/fnft.svg" id="finend2"/>
            </div>
            
            </footer>
        )
    }
}

export default Homepls;