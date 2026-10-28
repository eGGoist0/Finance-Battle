import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Profile.css";
import "../css/Fonts.css";
import "../assets/fonts/fluffyfont.ttf";
import "../assets/fonts/Poppins-Bold.ttf";
import Avatar_picker from "../components/Profile_page/Avatar_picker";
import Nickname_picker from "../components/Profile_page/Nickname_picker"; 

class Cabinet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active:"Profile", hovered:null, underlineStyle:{} };
    this.menuRefs = {};
    this.menuContainer = React.createRef();
  }

  componentDidMount() {
    const measure = () => this.moveUnderline(this.state.active);
    requestAnimationFrame(measure);
    window.addEventListener("load", measure);
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(() => requestAnimationFrame(measure)); }
    window.addEventListener("resize", measure);
  }

  componentWillUnmount() {
    const measure = () => this.moveUnderline(this.state.active);
    window.removeEventListener("load", measure);
    window.removeEventListener("resize", measure);
  }

  moveUnderline = (item) => {
    const el = this.menuRefs[item]; const container = this.menuContainer.current;
    if (!el || !container) return;
    const left = el.offsetLeft; const width = el.offsetWidth; const top = Math.max(0, el.offsetTop - 6);
    this.setState({ underlineStyle:{ width:`${width}px`, left:`${left}px`, top:`${top}px` } });
  };

  handleMouseEnter = (item) => { this.setState({ hovered:item }); this.moveUnderline(item); };
  handleMouseLeave = () => { this.setState({ hovered:null }); this.moveUnderline(this.state.active); };
  handleClick = (item) => { this.setState({ active:item }, () => { this.moveUnderline(item); }); };

  render() {
    const { active, hovered, underlineStyle } = this.state;
    const menuItems = ["Learn", "Battle", "Profile", "About", "Help"];

    return (
      <div data-aos="zoom-out" data-aos-duration="1500" style={{ backgroundColor:"#1E3A8A", backgroundImage:'url("/images/background.svg")', backgroundBlendMode:"overlay", backgroundPosition:"center", backgroundSize:"10%", backgroundRepeat:"repeat", height:"100vh"}}>
        <header className="header">
          <nav className="menu" ref={this.menuContainer}>
            {menuItems.map((item) => {
              let className = "menu-item";
              if (hovered === item) { className += " hovered"; } 
              else if (active === item && !hovered) { className += " active"; } 
              else if (active === item && hovered && hovered !== item) { className += " faded"; }
              return <div key={item} ref={(el) => (this.menuRefs[item] = el)} className={className} onMouseEnter={() => this.handleMouseEnter(item)} onMouseLeave={this.handleMouseLeave} onClick={() => this.handleClick(item)}>{item}</div>;
            })}
            <div className="underline" style={underlineStyle}></div>
          </nav>
        </header>
        <main>
          <Avatar_picker/>
          <Nickname_picker/>
        </main>
      </div>
    );
  }
}

export default Cabinet;
