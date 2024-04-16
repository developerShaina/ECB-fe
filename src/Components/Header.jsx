import React from "react";
import '../assets/CSS/Header.css';
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="horizontal-text">ECB</div>
        <div className="vertical-text">
         
          EVERYONE<br />
          CAN<br />
          BORROW
        </div>
      </div>
      <div className="header-center">
 MARKETPLACE
      </div>
      <div className="header-right">
        <button className="btn-login">Login</button>
        <button className="btn-register">Register</button>
      </div>
    </div>
  );
}

export default Header;
