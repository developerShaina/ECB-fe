import React from "react";
import '../assets/CSS/Header.css';
import ecbSVG from '../assets/Images/Frame 427320447.svg';
function Header() {
  return (
    <div className="header">
      <div className="header-left">
      <img src={ecbSVG} alt="ECB Logo" className="ecb-logo" />
      
      
      </div>
      <div className="header-center">
        MARKETPLACE
      </div>
      <div className="header-right">
        <button className="btn-login" >Login</button>
        <button className="btn-register">Register</button>
      </div>
    </div>
  );
}

export default Header;
