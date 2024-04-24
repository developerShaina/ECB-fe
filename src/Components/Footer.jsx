

import React from 'react';
import '../assets/CSS/footer.css';
import frameImage from '../assets/images/frame-223.svg';
import groupImage from '../assets/images/Group 427320388 (1).svg';
import groupImage1 from '../assets/images/Group 427320389.svg';
import groupImage2 from '../assets/images/Group 427320390.svg';
import groupImage3 from '../assets/images/Group 427320391.svg';
import groupImage4 from '../assets/images/Group 427320392.svg';




function Footer() {
  return (
    <div className="container33">
      <div className="left-section">
        <img
          src={frameImage}
          alt="Frame 427320447"
          className='main-image'
        />
        <br/>
        <br/>
        {/* <p>Empowering Dreams, Growing Wealth ECB, Where Everyone Can Borrow</p> */}
        <img
          src={groupImage}
          alt="Group 427320388"
          className="group-427320388" 
        />
        <img
          src={groupImage1}
          alt="Group 427320389"
          className="group-427320389" 
        />
         <img
          src={groupImage2}
          alt="Group 427320390"
          className="group-427320389" 
        />
           <img
          src={groupImage3}
          alt="Group 427320391"
          className="group-427320391" 
        />
            <img
          src={groupImage4}
          alt="Group 427320392"
          className="group-427320392" 
        />
      </div>
      <div className="right-section">
        <div className="company-links">
          <p className="company">Company</p>
          <p>About</p>
          <p>Investors</p>
          <p>Legal & Privacy</p>
        </div>
        <div className="company-links1">
          <p className="company1">Features</p>
          <p>Marketplace</p>
          <p>Wallet</p>
          <p>Dashboard</p>
          <p>Portfolio</p>
        </div>
        <div className="company-links2">
          <p className="company2">Resources</p>
          <p>Blog</p>
          <p>Help&Support</p>
          <p>Customer Stories</p>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
