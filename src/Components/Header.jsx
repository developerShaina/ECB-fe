import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ecbSVG from '../assets/images/Frame 427320447.svg';

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <button className="btn-login" onClick={handleShow}>Login</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
      <div>
        <Modal show={show} onHide={handleClose} style={{ padding: '2rem', borderRadius: '40px' }}>
          <>
            <div className="header-left">
              <img src={ecbSVG} alt="Image" style={{ maxHeight: '300px', marginLeft: '1rem' }} />
            </div>
            <div className="login-container">
              <input type="email" className="input-field email" placeholder="Email Id" />
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