import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

function Header() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [activeForm, setActiveForm] = React.useState();
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  // const handleShowRegister = () => setShowRegister(true);


  return (
    <>
      <div className="header">
        <div className="header-left">
        </div>
        <div className="header-center">
          MARKETPLACE
        </div>
        <div className="header-right">
          <button className="btn-login" onClick={() => { setActiveForm('login'); handleShowLogin() }}>Login</button>
          <button className="btn-register" onClick={() => { setActiveForm('signup'); handleShowLogin() }}>Register</button>

        </div>
      </div>
      <div>
        <Login setActiveForm={setActiveForm} activeForm={activeForm} showLogin={showLogin} handleClose={handleCloseLogin} />
        <Register showRegister={showRegister} handleClose={handleCloseRegister} />
      </div>
    </>
  );
}

export default Header;