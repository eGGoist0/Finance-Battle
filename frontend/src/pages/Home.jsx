import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import "../css/Fonts.css";

import Homehd from "../components/Home_page/Homehd.jsx";
import Homemn from "../components/Home_page/Homemn.jsx";
import Homepls from "../components/Home_page/Homepls.jsx";


class Home extends React.Component {
  render() {
    return (
      <div style={{ backgroundImage: `linear-gradient(to bottom, #FFB300, #1E3A8A), url("/images/background.svg")` , backgroundBlendMode:'overlay', backgroundPosition:'center' , backgroundSize:'10%' , backgroundRepeat:'repeat'}}>
          
          {/*HEADER*/}
          <Homehd/>
          


          {/*Main*/}
          <Homemn/>


          {/*КАРТИНКИ*/}
          <Homepls/>

      </div>
    );
  }
}

export default Home;