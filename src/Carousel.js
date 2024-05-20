import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function DarkVariantExample() {
    const carouselItemStyle = {
      height: '400px', 
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
            src="./img.avif" // Relative path to the image
            alt="First slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100"
            src="img2.jpeg" // Relative path to the image'
            
            alt="Second slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100"
            src="./img3.webp" // Relative path to the image
            alt="Third slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default DarkVariantExample;