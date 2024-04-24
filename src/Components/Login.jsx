

import React, { useState } from 'react';
import axios from 'axios';
import '../assets/CSS/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Col, Modal, Row } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import BackgroundImage from '../assets/images/image1.png';
import Image from '../assets/images/Everyone Can Borrow (1).png';
import Image2 from '../assets/images/Group 427320445.png';

const Login = ({ setActiveForm, activeForm, ...props }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('male');
    const [dob, setDob] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSignup = () => {
        const userData = {
            fullName,
            email,
            gender,
            dob,
            mobileNumber,
            password,
        };

        axios.post('https://probable-phelia-ecb.koyeb.app/users/signup', userData)
            .then(response => {
                console.log('Signup successful:', response.data);
  })
            .catch(error => {
                console.error('Signup failed:', error);

            });
        };
 return (
        <>
            <Modal
                {...props}
                show={props.showLogin}
                size="lg"
                onHide={props.handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='p-0'>
                    <>
                        <Row>
                            <Col lg={7} className='d-flex align-items-center justify-content-center flex-column  gap-2 custPadding '>
                                <div className='d-flex'>
                                    <img className='ecb-image' src={Image2} alt="Image2" />
                                    <img className="ecb" src={Image} alt="Image" />
                                </div>
                                {activeForm === 'login' ? (
                                    <>
                                        <h4 className="text-login">Login</h4>
                                        <div className="input-container3">
                                            <label htmlFor="email" className="input-label-cust">Email Id:</label>
                                            <div className="input-with-icon">
                                                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                                <input type="email" id="email" className="input-field email" placeholder="Enter Email" />
                                            </div>
                                        </div>
                                        <div className="input-container3">
                                            <label htmlFor="password" className="input-label-cust">Password:</label>
                                            <div className="input-with-icon">
                                                <FontAwesomeIcon icon={faLock} className="input-icon" />
                                                <input type="password" id="password" className="input-field password" placeholder="Enter Password" />
                                            </div>
                                        </div>
                                        <a href="#" className="forgot-password">Forgot Password?</a>
                                        <div className="remember-me-container">
                                            <input type="checkbox" id="rememberMe" className="remember-me-checkbox" />
                                            <label htmlFor="rememberMe" className="remember-me">Remember Me</label>
                                        </div>
                                        <button className="login-button-custom text-white">Login</button>
                                    </>
                                ) : (
                                    <>
                                        <div className='customFields'>
                                            <h4 className="text-login1">Create an account</h4>
                                            <div className='modalcust7'>
                                                <div className="input-container-cust">
                                                    <label htmlFor="fullName" className="input-label-cust">Full Name:</label>
                                                    <div className="input-container-cust">
                                                        <input type="text" id="fullName" className="input-field fullName custominput inputFullName" placeholder="Enter Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="input-container-cust">
                                                    <label htmlFor="email" className="input-label-cust">Email Id:</label>
                                                    <div className="input-with-icon">
                                                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                                        <input type="email" id="email" className="input-field email custominput" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="input-container-cust1">
                                                    <div className='customGender'>
                                                        <label htmlFor="gender" className="input-label-cust1">Gender:</label>
                                                        <select id="gender" className="input-field gender" value={gender} onChange={e => setGender(e.target.value)}>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div className='customDob'>
                                                        <label htmlFor="dob" className="input-label-cust1">Date of Birth:</label>
                                                        <input type="date" id="dob" className="input-field dob" value={dob} onChange={e => setDob(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="input-container-cust">
                                                    <label htmlFor="mobileNumber" className="input-label-cust2">Mobile Number:</label>
                                                    <div className="input-container">
                                                        <input type="tel" id="mobileNumber" className="input-field mobileNumber custominput inputFullName" placeholder="+91 | Enter Mobile Number" value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="input-container-cust">
                                                    <label htmlFor="password" className="input-label-cust">Password:</label>
                                                    <div className="input-with-icon">
                                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                                        <input type="password" id="password" className="input-field password custominput" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
                                                        <FontAwesomeIcon icon={faEyeSlash} className="eye-icon customeye" />
                                                    </div>
                                                </div>
                                                <div className="input-container-cust">
                                                    <label htmlFor="confirmPassword" className="input-label-cust">Confirm Password:</label>
                                                    <div className="input-with-icon">
                                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                                        <input type="password" id="confirmPassword" className="input-field confirmPassword custominput" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                                        <FontAwesomeIcon icon={faEyeSlash} className="eye-icon customeye" />
                                                    </div>
                                                </div>
                                                <div className="input-container-cust">
                                                    <input type="checkbox" id="agreeTerms" className="agree-terms-checkbox" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} />
                                                    <label htmlFor="agreeTerms" className="agree-terms">I agree to the Terms of Service and Privacy Policy.</label>
                                                </div>
                                                <button className="signup-button1 text-white" onClick={handleSignup}>Signup</button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </Col>
                            <Col lg={5} className='p-0 d-flex align-items-center justify-content-center flex-column '>
                                <div className="background-image-container">
                                    <CloseButton onClick={props.handleClose} />

                                    <img className="background-image" src={BackgroundImage} alt="Background" />
                                    {activeForm === 'login' ? (
                                        <div className="text-over-image">
                                            <h5>New Here?</h5>
                                            <p>Unlocking Opportunities for Borrowers and Investors</p>
                                            <button className="signup-button text-white" onClick={() => setActiveForm('signup')}>Signup</button>
                                        </div>
                                    ) : (
                                        <div className="text-over-image1">
                                            <h5>Have an account?</h5>
                                            <p>Unlocking Opportunities for Borrowers and Investors</p>
                                            <button className="login-button1" onClick={() => setActiveForm('login')}>Login</button>
                                        </div>
                                    )}

                                    <div className="grey-background2"></div>
                                </div>
                            </Col>
                        </Row>
                    </>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Login;
