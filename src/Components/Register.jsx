
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
import { Col, Modal, Row } from 'react-bootstrap';
import BackgroundImage from '../assets/images/image1.png';
import Image from '../assets/images/Everyone Can Borrow (1).png';
import Image2 from '../assets/images/Group 427320445.png';

const Register = (props) => {
    return (
        <>
            <Modal
                {...props}
                show={props.showRegister}
                size="lg"
                onHide={props.handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='customheader' closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={7} className='d-flex flex-column  '>
                            <div className='d-flex customimage '>
                                <img className='ecb-image1' src={Image2} alt="Image2" />
                                <img className="ecb1" src={Image} alt="Image" />
                            </div>
                            <h4 className="text-login1">Create an account</h4>
                            <div className='modalcust'>
                                <div className="input-container">
                                    <label htmlFor="fullName" className="input-label">Full Name:</label>
                                    <div className="input-container">
                                        <input type="text" id="fullName" className="input-field fullName" placeholder="Enter Full Name" />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="email" className="input-label">Email Id:</label>
                                    <div className="input-with-icon">
                                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                        <input type="email" id="email" className="input-field email" placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="gender" className="input-label">Gender:</label>
                                    <select id="gender" className="input-field gender">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <label htmlFor="dob" className="input-label">Date of Birth:</label>
                                    <input type="date" id="dob" className="input-field dob" />
                                </div>
                                <div className="input-container">                                   <label htmlFor="mobileNumber" className="input-label">Mobile Number:</label>
                                    <div className="input-container">
                                        <input type="tel" id="mobileNumber" className="input-field mobileNumber" placeholder="Enter Mobile Number" />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="password" className="input-label">Password:</label>
                                    <div className="input-with-icon">
                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                        <input type="password" id="password" className="input-field password" placeholder="Enter Password" />
                                        <FontAwesomeIcon icon={faEye} className="eye-icon" />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="confirmPassword" className="input-label">Confirm Password:</label>
                                    <div className="input-with-icon">
                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                        <input type="password" id="confirmPassword" className="input-field confirmPassword" placeholder="Confirm Password" />
                                        <FontAwesomeIcon icon={faEye} className="eye-icon" />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <input type="checkbox" id="agreeTerms" className="agree-terms-checkbox" />
                                    <label htmlFor="agreeTerms" className="agree-terms">I agree to the Terms of Service and Privacy Policy.</label>
                                </div>
                                <button className="signup-button1 text-white">Signup</button>
                            </div>

                        </Col>

                        <Col lg={5} className='d-flex align-items-center justify-content-center'>
                            <div className="background-image-container1">
                                <img className="background-image1" src={BackgroundImage} alt="Background" />
                                <div className="text-over-image1">
                                    <h5>Have an account?</h5>
                                    <p>Unlocking Opportunities for Borrowers and Investors</p>
                                    <button className="login-button1">Login</button>
                                </div>
                                <div className="grey-background1"></div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Register;

