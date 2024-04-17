import * as React from 'react';
import '../assets/CSS/Header.css';
import '../assets/CSS/login.css';

import { Button, Modal } from 'react-bootstrap';
function Header() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
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
        <button className="btn-login" onClick={handleShow}>Login</button>
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
        </>

      </Modal>
    </div>


  </>


  );
}

export default Header;
