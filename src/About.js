import { Alert, Col, Container, Row, Image } from "react-bootstrap";
import project from './project.png';
import React from 'react';




export function About(){
    return (
        <div>
            <Container>
                <h2 className="about">About us</h2>
                
                <h4>We aspires to be a one-stop solution for all car care needs</h4>
                <p>GoMechanic stands at the forefront of the automotive service industry, blending reliability with cost-effectiveness for unparalleled car care. Today, GoMechanic 2.0, acquired by Servizzy, is redefining the automotive service industry. Led by co-founders Krunal Hatwar, Girish Patil and Aman, our mission is to redefine the automotive service industry through innovation, reliability, and customer-centricity.</p>
                <p>We have expanded our presence across 50+ cities in India, offering comprehensive car servicing solutions tailored to meet the diverse needs of our customers. Our dedicated team of over 100 skilled technicians undergo meticulous training to ensure expertise in the latest automotive technologies.</p>
                <p>Krunal Hatwar, with his expertise in automotive technology, leads GoMechanic's innovation and growth. His relentless pursuit of excellence continues to shape the future of automotive services.</p>
                <p>Girish Patil, leveraging her skills in business strategy, improves customer service at GoMechanic. Her vision and dedication are crucial to our success.</p>
                
                <h2 className="about">Core Team</h2>
                <p>People behind the service</p>
                
                
            <Row>
            <Col xs={20} md={4} >
                <Image src={project}   rounded fluid className="mb-1"/>
                <p>Krunal Hatwar</p>
            </Col>
            <Col xs={6} md={4}>
                <Image src={project}  rounded fluid className="mb-1"/>
                <p>Girish Patil</p>
            </Col>
            <Col xs={6} md={4}>
                <Image src={project}  rounded fluid className="mb-1"/>
                <p>Aman</p>
            </Col>
            </Row>
              
            </Container>
           
        </div>
    );
}
export default About;//<Alert variant="success">We aspires to be a one-stop solution for all car care needs</Alert>