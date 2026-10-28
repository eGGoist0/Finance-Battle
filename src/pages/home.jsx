import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "../css/Home.css";
import "../assets/fonts/fluffyfont.ttf";
import "../assets/fonts/Poppins-Bold.ttf";
import "bootstrap/dist/css/bootstrap.min.css";


class Home extends React.Component {
  render() {
    return (
      <div style={{ backgroundImage: 'linear-gradient(to bottom, #FFB300, #1E3A8A), url("/images/background.svg")' , backgroundBlendMode:'overlay', backgroundPosition:'center' , backgroundSize:'10%' , backgroundRepeat:'repeat'}}>
          
          {/*ТАБЛИЧКА FINANCE BATTLE*/}
          <header data-aos="zoom-out" data-aos-duration="1500" style={{ paddingTop:'5vw' , display: 'flex' , justifyContent:'center' }}>
            <div id="blf" style={{ backgroundColor: '#1E3A8A', alignItems:'center'}}>
              <p id="blftx" style={{ fontFamily: 'FluffyFont', fontWeight:'normal' , color: '#FFFFFF', textAlign: 'center', padding:'5px 15px 1px 15px' , margin:'0' }}>Finan¢e Battle$</p>
            </div>
          </header>
          


          {/*ОПИСАНИЕ*/}
          <main data-aos="zoom-out" data-aos-duration="1500">
            <div>
              <p id="d1" style={{fontFamily: 'FluffyFont', fontWeight:'normal' , color: '#FFFFFF', textAlign: 'center'}} >Improve your knowledge</p>
              <p id="d2" style={{fontFamily: 'Poppins', fontWeight:'bold', color: '#FFFFFF' , margin:'-1% auto auto', textAlign:'center'}} >Compete with others in finance and business challenges, that test your strategy and knowledge.</p>
            </div>
            <div className="auth" style={{textAlign:'center'}}>
              <Link to="/signup" className="signup">
                <a>Sign Up</a>
              </Link>
                <p className="login" style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 'bold' ,  marginTop:'2%' }}>
                  Have an account?{' '}
                  <Link to="/login" className="login">
                    Log in
                  </Link>
                </p>
            </div>
          </main>


          {/*КАРТИНКИ*/}
          
          
          {/*КАРТИНКА 1*/}
          <footer className="footer">
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


            {/*КАРТИНКА 2*/}
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



            {/*КАРТИНКА 3*/}    
            <div className="container-fluid" id="exmp" data-aos="fade-up" data-aos-anchor-placement="top-center">
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
            <div id="finend" style={{ textAlign: 'center', paddingBottom: '2%' }}>
              <img src="/images/fnft.svg" style={{ width: '20%'}} />
            </div>
          </footer>
      </div>
    );
  }
}

export default Home;