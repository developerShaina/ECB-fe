import React from "react";
import '../assets/CSS/Header.css';
import ecbSVG from '../assets/Images/Frame 427320447.svg';
import { Modal } from 'react-bootstrap'
function Header() {

  
  return (
    <>
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

    {/* modallogin */}<div >
      {/* <Modal  show={show} onHide={handleClose}>
        <div className="header-left">
          <div className="horizontal-text">ECB</div>
          <div className="vertical-text">
            EVERYONE<br />
            CAN<br />
            BORROW
          </div>
        </div>
        <div className="login-container">
          <input type="email" className="input-field email" placeholder="Email Id" />
          <input type="password" className="input-field password" placeholder="Password" />
          <a href="#" className="forgot-password">Forgot Password?</a>
          <label className="remember-me">Remember Me?</label>
          <button className="login-button">Login</button>
        </div>

      </Modal> */}

      <Modal className='login-modal1'  show={show} onHide={handleClose}style={{  padding: '2rem', borderRadius: '40px' }} >
        <>
          <div className="header-left">
          <img src={Image} alt="Image" style={{ maxHeight: '300px', marginLeft: '1rem' }} />

          </div>
          <div className="login-container">
            <input type="email" className="input-field email"  placeholder="Email Id" />
            <input type="password" className="input-field password" placeholder="Password" />
            <a href="#" className="forgot-password">Forgot Password?</a>
            <label className="remember-me">Remember Me?</label>
            <button className="login-button text-white">Login</button>
          </div>
        </>

      </Modal>
    </div>


  </>


  );
}

export default Header;
