
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
// import { Col, Modal, Row } from 'react-bootstrap';
// import BackgroundImage from '../assets/images/image1.png';
// import Image from '../assets/images/Everyone Can Borrow (1).png';
// import Image2 from '../assets/images/Group 427320445.png';

// const Register = (props) => {
//     return (
//         <>
//             <Modal
//                 {...props}
//                 show={props.showRegister}
//                 size="lg"
//                 onHide={props.handleClose}
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//             >
//                 <Modal.Header className='customheader' closeButton>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Row>
//                         <Col lg={7} className='d-flex flex-column  '>
//                             <div className='d-flex customimage '>
//                                 <img className='ecb-image1' src={Image2} alt="Image2" />
//                                 <img className="ecb1" src={Image} alt="Image" />
//                             </div>
//                             <h4 className="text-login1">Create an account</h4>
//                             <div className='modalcust'>
//                                 <div className="input-container">
//                                     <label htmlFor="fullName" className="input-label">Full Name:</label>
//                                     <div className="input-container">
//                                         <input type="text" id="fullName" className="input-field fullName" placeholder="Enter Full Name" />
//                                     </div>
//                                 </div>
//                                 <div className="input-container">
//                                     <label htmlFor="email" className="input-label">Email Id:</label>
//                                     <div className="input-with-icon">
//                                         <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
//                                         <input type="email" id="email" className="input-field email" placeholder="Enter Email" />
//                                     </div>
//                                 </div>
//                                 <div className="input-container">
//                                     <label htmlFor="gender" className="input-label">Gender:</label>
//                                     <select id="gender" className="input-field gender">
//                                         <option value="male">Male</option>
//                                         <option value="female">Female</option>
//                                         <option value="other">Other</option>
//                                     </select>
//                                     <label htmlFor="dob" className="input-label">Date of Birth:</label>
//                                     <input type="date" id="dob" className="input-field dob" />
//                                 </div>
//                                 <div className="input-container">                                   <label htmlFor="mobileNumber" className="input-label">Mobile Number:</label>
//                                     <div className="input-container">
//                                         <input type="tel" id="mobileNumber" className="input-field mobileNumber" placeholder="Enter Mobile Number" />
//                                     </div>
//                                 </div>
//                                 <div className="input-container">
//                                     <label htmlFor="password" className="input-label">Password:</label>
//                                     <div className="input-with-icon">
//                                         <FontAwesomeIcon icon={faLock} className="input-icon" />
//                                         <input type="password" id="password" className="input-field password" placeholder="Enter Password" />
//                                         <FontAwesomeIcon icon={faEye} className="eye-icon" />
//                                     </div>
//                                 </div>
//                                 <div className="input-container">
//                                     <label htmlFor="confirmPassword" className="input-label">Confirm Password:</label>
//                                     <div className="input-with-icon">
//                                         <FontAwesomeIcon icon={faLock} className="input-icon" />
//                                         <input type="password" id="confirmPassword" className="input-field confirmPassword" placeholder="Confirm Password" />
//                                         <FontAwesomeIcon icon={faEye} className="eye-icon" />
//                                     </div>
//                                 </div>
//                                 <div className="input-container">
//                                     <input type="checkbox" id="agreeTerms" className="agree-terms-checkbox" />
//                                     <label htmlFor="agreeTerms" className="agree-terms">I agree to the Terms of Service and Privacy Policy.</label>
//                                 </div>
//                                 <button className="signup-button1 text-white">Signup</button>
//                             </div>

//                         </Col>

//                         <Col lg={5} className='d-flex align-items-center justify-content-center'>
//                             <div className="background-image-container1">
//                                 <img className="background-image1" src={BackgroundImage} alt="Background" />
//                                 <div className="text-over-image1">
//                                     <h5>Have an account?</h5>
//                                     <p>Unlocking Opportunities for Borrowers and Investors</p>
//                                     <button className="login-button1">Login</button>
//                                 </div>
//                                 <div className="grey-background1"></div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// };

// export default Register;
import React, { useState } from 'react';
import '../assets/CSS/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';

import BackgroundImage from '../assets/images/image1.png';
import Image from '../assets/images/Everyone Can Borrow (1).png';
import Image1 from '../assets/images/image1.png';
import Image2 from '../assets/images/Group 427320445.png';
import { Col, Modal, Row } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Login = ({ setActiveForm, activeForm, ...props }) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    console.log(activeForm);
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
                                {activeForm === 'login' ? <>
                                    <h4 className="text-login">Login</h4>
                                    <div className="input-container3">
                                        <label htmlFor="email" className="input-label-cust">Email Id:</label>
                                        <div className="input-with-icon">
                                            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                            <input type="email" id="email" className="input-field email " placeholder="Enter Email" />
                                        </div>
                                    </div>
                                    <div className="input-container3">
                                        <label htmlFor="password" className="input-label-cust">Password:</label>
                                        <div className="input-with-icon">
                                            <FontAwesomeIcon icon={faLock} className="input-icon" />
                                            <input type={passwordVisibility ? "text" : "password"} id="password" className="input-field password" placeholder="Enter Password" />
                                            <FontAwesomeIcon icon={passwordVisibility ? faEyeSlash : faEye} className="eye-icon customeye" onClick={togglePasswordVisibility} />
                                        </div>
                                    </div>
                                    <a href="#" onClick={() => setActiveForm('forgetPassword')} className="forgot-password">Forgot Password?</a>
                                    <div className="remember-me-container">
                                        <input type="checkbox" id="rememberMe" className="remember-me-checkbox" />
                                        <label htmlFor="rememberMe" className="remember-me">Remember Me</label>
                                    </div>
                                    <button className="login-button-custom text-white">Login</button>
                                </> : activeForm === 'signup' ? (
                                    <>
                                        <div className='customFields'>
                                            <h4 className="text-login1">Create an account</h4>
                                            <div className='modalcust7'>
                                                <div className="input-container-cust">
                                                    <label htmlFor="fullName" className="input-label-cust">Full Name:</label>
                                                    <div className="input-container-cust">
                                                        <input type="text" id="fullName" className="input-field fullName custominput inputFullName" placeholder="Enter Full Name" />
                                                    </div>
                                                </div>
                                                {/* Rest of the signup form */}
                                            </div>
                                        </div>
                                    </>
                                ) : activeForm === 'forgetPassword' ? (
                                    <>
                                        <div className="customForgotPassword1">
                                            {/* Forgot Password form */}
                                        </div>
                                    </>
                                ) : null}
                            </Col>
                            <Col lg={5} className='p-0 d-flex align-items-center justify-content-center flex-column '>
                                <div className="background-image-container">
                                    <CloseButton onClick={props.handleClose} />
                                    <img className="background-image" src={BackgroundImage} alt="Background" />
                                    {activeForm === 'login' ? <>
                                        {/* Text over image for login */}
                                    </> : (
                                        <>
                                            {/* Text over image for signup */}
                                        </>
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

