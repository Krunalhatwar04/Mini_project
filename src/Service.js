import {Card, Row, Col, Button} from 'react-bootstrap';
//import { useHistory } from  'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Style.css';
import Adminnav from './adminnav';
// import s1 from './s1.jpg';
// import s2 from './s2.png';
// import s3 from './s3.png';
// import s4 from './s4.png';
// import s5 from './s5.png';


   export default function Service(){

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/servicesform');
    }
    
    return(
        <><Adminnav /><div>
            <div className='division'>

                <Card className='card'>
                    <Card.Body className='card-body'>
                        <Card.Title className='title'> <h4>Standard Service</h4></Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <Card.Img src='./s1.jpg' className='images'></Card.Img>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>1000 Kms or 1 Month Warranty</li>
                                        <li>Batter Water Top up</li>
                                        <li>Oil and Filter Change</li>
                                    </ul>
                                    <strike>Rs. 4999</strike>
                                    <h6>Rs. 3999</h6>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Engine Oil Replacement</li>
                                        <li>Bike Wash</li>
                                        <li>Tyre Change</li>
                                    </ul>
                                    <Button variant="primary" onClick={() => handleClick()}>Book Now</Button>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


            <div className='division'>
                <Card className='card'>
                    <Card.Body className='card-body'>
                        <Card.Title><h4>Bike Service</h4></Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <Card.Img src='./s2.jpg' className='images'></Card.Img>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>2000 Kms or 5 Month Warranty</li>
                                        <li>Seat Change and Painting</li>
                                        <li>Oil and Filter Change</li>
                                    </ul>
                                    <strike>Rs. 9999</strike>
                                    <h6>Rs. 9000</h6>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Engine Oil Replacement</li>
                                        <li>Bike Wash</li>
                                        <li>Tyre Change</li>
                                    </ul>
                                    <Button variant="primary" onClick={() => handleClick()}>Book Now</Button>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='division'>
                <Card className='card'>
                    <Card.Body className='card-body'>
                        <Card.Title><h4>Basic Service</h4></Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <Card.Img src='./s6.jpg' className='images'></Card.Img>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>800 Kms or 1 Month Warranty</li>
                                        <li>Breaks Check</li>
                                        <li>Oil and Filter Change</li>
                                    </ul>
                                    <strike>Rs. 3999</strike>
                                    <h6>Rs. 3000</h6>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Engine Oil Replacement</li>
                                        <li>Bike Wash</li>
                                        <li>Tyre Change</li>
                                    </ul>
                                    <Button variant="primary" onClick={() => handleClick()}>Book Now</Button>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='division'>
                <Card className='card'>
                    <Card.Body className='card-body'>
                        <Card.Title><h4>Normal Service</h4></Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <Card.Img src='./s5.jpg' className='images'></Card.Img>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>500 Kms or 1 Month Warranty</li>
                                        <li>Breaks Check</li>
                                        <li>Oil and Filter Change</li>
                                    </ul>

                                    <h6>Rs. 5500</h6>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Engine Oil Replacement</li>
                                        <li>Bike Wash</li>
                                        <li>Tyre Change</li>
                                    </ul>
                                    <Button variant="primary" onClick={() => handleClick()}>Book Now</Button>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='division'>

                <Card className='card'>
                    <Card.Body className='card-body'>
                        <Card.Title><h4>Medium Service</h4></Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <Card.Img src='./s4.jpg' className='images'></Card.Img>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>100 Kms or 1 Month Warranty</li>
                                        <li>Breaks Check</li>
                                        <li>Oil and Filter Change</li>
                                    </ul>

                                    <h6>Rs. 3000</h6>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Engine Oil Replacement</li>
                                        <li>Bike Wash</li>
                                        <li>Tyre Check</li>
                                    </ul>
                                    <Button variant="primary" onClick={() => handleClick()}>Book Now</Button>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div></>
     );
}