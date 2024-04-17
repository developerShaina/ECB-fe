import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Login = (props) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <div className="login-container">
                    <input type="email" className="input-field email" placeholder="Email Id" />
                    <input type="password" className="input-field password" placeholder="Password" />
                    <a href="#" className="forgot-password">Forgot Password?</a>
                    <label className="remember-me">Remember Me?</label>
                    <button className="login-button">Login</button>
                </div>
            </Modal>
        </>

    );
};

export default Login;
