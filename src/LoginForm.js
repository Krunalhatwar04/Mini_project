// LoginForm.js
// import React from 'react';
// import { useParams } from 'react-router-dom';

// export default function LoginForm() {
//     const { role } = useParams();

//     return (
//         <div>
//             <h2>Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control" id="email" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control" id="password" />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Login</button>
//             </form>
//         </div>
//     );
// }


import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loginUser } from './service/UserService';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import './Login.css'; 
// import './form.css'
import Signup from './Signup';
export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

       const validationErrors = {};
        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is not valid";
        }
        if (!formData.password) {
            validationErrors.password = "Password is required";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await loginUser(formData);
                setSuccessMessage(response.data.message);
                setErrorMessage('');
                navigate('/service-centers');
            } catch (error) {
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("There was an error logging in!");
                }
                setSuccessMessage('');
            }
        }
    };

    return (
        <div className="mini-login-container">
        <Container className="my-5 ,text-left">
            <Row className="justify-content-center align-items-center">
                <Col xs={12} sm={8} md={6} lg={4}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4" >Login    <Link to="/" className="text-primary">
                                        <FaHome size={30} />
                                    </Link>   
                            </h2>
                            

                            {successMessage && <Alert variant="success">{successMessage}</Alert>}
                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        //  isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </Form.Group>
                                <div className="login-button hover"> {/* Center the login button */}
                                        <Button type="submit" variant="primary" block>Login</Button>
                                    </div>
                            </Form>
                            <div className="text-center mt-3">
                                <Link to="./signup">Don't have an account? Sign up</Link>
                                {/* <a href="./signup">Signup</a> */}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    );
}



