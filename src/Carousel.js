import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function DarkVariantExample() {
    const carouselItemStyle = {
      height: '500px', 
    };
  
    const imgStyle = {
      objectFit: 'cover',
      height: '100%',
      width: '100%',
    };
  
    return (
      <Carousel variant="dark">
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100"
            src="./home.jpg" // Relative path to the image
            alt="First slide"
            style={imgStyle}
          />
          <Carousel.Caption>
          <h2>Welcome to our Service Center</h2>
          <h4>Get hassle free and professional bike service, bike repair, wheel care services, cashless insurance claim and much more</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100"
            src="./img.avif" // Relative path to the image'
            
            alt="Second slide"
            style={imgStyle}
          />
          <Carousel.Caption>
          <h2>Choose the workshop near you</h2>
            <h4>Schedule a Pickup Today!</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100"
            src="./slide4.avif" // Relative path to the image
            alt="Third slide"
            style={imgStyle}
          />
          <Carousel.Caption>
          <h2>Select perfect bike Service</h2>
            <h4>You will get multiple services</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default DarkVariantExample;