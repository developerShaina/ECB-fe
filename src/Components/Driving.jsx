import React from 'react';
import '../assets/CSS/driving.css';
import GroupImage from '../assets/images/Group 427320379.svg';

function Driving() {
  return (
    <div className="container-wrapper">
      <div className="driving-container">
        <h1 className="driving-heading">Our Driving Force</h1>
        <p className="driving-content">
          From Dream to Reality: How ECB Empowered My Business with Easy Funding
        </p>
        <p>
          "I was amazed by how easy it was to secure funding for my business through ECB. The platform connected me with enthusiastic investors who believed in my vision. Thanks to ECB, my dream became a reality!"
        </p>
        <p>
          <span className="bold-text">Angelina Jelly</span><br />
          Entrepreneur and Borrower
        </p>
        <div className="arrow-left">&#8592;</div>
        <div className="arrow-right">&#8594;</div>
      </div>
      <div className="image-container">
        <img src={GroupImage} alt="Group Image" className="group-image" />
      </div>
    </div>
  );
}

export default Driving;

