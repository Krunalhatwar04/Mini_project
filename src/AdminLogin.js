// import React from 'react';

// const AdminLogin = () => {
//   return (
//     <div>
//       <h2>Admin Login</h2>
//       {/* Add your admin login form here */}
//     </div>
//   );
// };

// export default AdminLogin;


// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/login/user');
import React, { useState } from 'react';
import { adminlogin } from './service/AdminService';
import { Container, Form, Button, Alert, Row, Col,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function AdminLogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await adminlogin(formData);
            setMessage(response.data.message);
            navigate('/about');
        } 
      
        
        catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="mini-login-container">
        <Container className="my-5 ,text-left">
            <Row className="justify-content-center align-items-center">
                <Col xs={12} sm={8} md={6} lg={4}>
                    <Card>
                        <Card.Body>
                            {/* <h2 className="text-center mb-4 "style={{color:'GrayText'}} >Admin Login</h2> */}
                            <h2 className="text-center mb-4" >Admin <Link to="/" className="text-primary">
                                        <FaHome size={30} />
                                    </Link>   
                            </h2>
                            {message && <Alert variant="primary">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        />
                                       
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <div className="login-button hover"> {/* Center the login button */}
                                        <Button type="submit" variant="primary" block>Login</Button>
                                    </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    );
}



