




import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
import { Col, Modal, Row } from 'react-bootstrap';
import BackgroundImage from '../assets/images/image1.png';
import Image from '../assets/images/Everyone Can Borrow (1).png';
import Image2 from '../assets/images/Group 427320445.png';

const Register = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('male');
    const [dob, setDob] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSignup = () => {
        console.log('f');
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
                                        <input type="text" id="fullName" className="input-field fullName" placeholder="Enter Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="email" className="input-label">Email Id:</label>
                                    <div className="input-with-icon">
                                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                        <input type="email" id="email" className="input-field email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="gender" className="input-label">Gender:</label>
                                    <select id="gender" className="input-field gender" value={gender} onChange={e => setGender(e.target.value)}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <label htmlFor="dob" className="input-label">Date of Birth:</label>
                                    <input type="date" id="dob" className="input-field dob" value={dob} onChange={e => setDob(e.target.value)} />
                                </div>
                                <div className="input-container">
                                    <label htmlFor="mobileNumber" className="input-label">Mobile Number:</label>
                                    <div className="input-container">
                                        <input type="tel" id="mobileNumber" className="input-field mobileNumber" placeholder="Enter Mobile Number" value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="password" className="input-label">Password:</label>
                                    <div className="input-with-icon">
                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                        <input type="password" id="password" className="input-field password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
                                        <FontAwesomeIcon icon={faEye} className="eye-icon" />
                                        ```javascript
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="confirmPassword" className="input-label">Confirm Password:</label>
                                    <div className="input-with-icon">
                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                        <input type="password" id="confirmPassword" className="input-field confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                        <FontAwesomeIcon icon={faEye} className="eye-icon" />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="checkbox-container">
                                        <input type="checkbox" id="agreeTerms" className="agreeTerms" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} />
                                        <label htmlFor="agreeTerms" className="checkbox-label">I agree to the Terms and Conditions</label>
                                    </div>
                                </div>
                                <button className="signup-button1 text-white" onClick={handleSignup}>Signup</button>
                              

                            </div>
                        </Col>
                        <Col lg={5} className='d-flex align-items-center justify-content-center'>
                            <img className="background-image" src={BackgroundImage} alt="Background" />
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Register;
