
import React from 'react';
import { Card } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/CSS/partner.css'; 
import Frame2 from '../assets/images/Frame 427320733 (1).svg';
import Frame3 from '../assets/images/Frame 427320733 (2).svg';
import Frame4 from '../assets/images/Frame 427320733 (3).svg';
import Frame5 from '../assets/images/Frame 427320733 (4).svg';
import Frame6 from '../assets/images/Frame 427320733 (5).svg';

function Partners() {
  return (
    <>
    <div className="partners-container">
    <h2 className="partners-heading">Our Partners</h2>
      <div className="left-slide">
        <Card className="card">
          <Card.Img src={Frame2} alt="Second slide" />
        </Card>
        <Card className="card">
          <Card.Img src={Frame3} alt="Third slide" />
        </Card>
        <Card className="card">
          <Card.Img src={Frame4} alt="Fourth slide" />
        </Card>
        <Card className="card">
          <Card.Img src={Frame5} alt="Fifth slide" />
        </Card>
        <Card className="card">
          <Card.Img src={Frame6} alt="Sixth slide" />
        </Card>
      </div>
      <div className="right-slide">
        <Card className="card">
          <Card.Img src={Frame6} alt="Sixth slide" />
        </Card>
        <Card className="card">
          <Card.Img src={Frame5} alt="Fifth slide" />
        </Card>
        <Card className="card">
          <Card.Img src={Frame4} alt="Fourth slide" />
        </Card>
        <Card className="card">
          <Card.Img src={Frame3} alt="Third slide" />
        </Card>
        <Card className="card">
          <Card.Img src={Frame2} alt="Second slide" />
        </Card>
      </div>
    </div></>
    
  );
}

export default Partners;



