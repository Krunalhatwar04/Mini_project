// // Contact.js
// import React from 'react';

// export default function Contact() {
//     return <div>Contact Page</div>;
// };

import { Container, Col, Row } from "react-bootstrap";
import React from 'react';
import './Contact.css';

export function Contact() {
    return (
        <div>
            <Container className="contact">
                <h2 id="connect">Connect with us</h2>
                <br></br>
                <Row className="row justify-content-center">
                    <Col xs={6} md={4} className="column">
                        <div className="text-center">
                            <h3>Phone</h3>
                            <a href=" "> +91-888887777</a><br/>
                            <a href=" "> +91-777774744</a>
                            
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="column">
                        <div className="text-center">
                            <h3>Email</h3>
                            <a href="">Admin1@myapp.com</a>
                            <br />
                            <a href=""> Admin2@myapp@myapp.com</a>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact;
