
// import React from 'react';
// import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
// import './Signup.css'; // Import your custom CSS file

// export default function Signup() {
//     return (
//         <div className="mini-login-container">
//             <Container>
//                 <Row className="justify-content-center align-items-center">
//                     <Col xs={12} sm={8} md={6} lg={4}>
//                         <Card>
//                             <Card.Body>
//                                 <h2 className="text-center mb-4">Sign Up</h2>
//                                 <Form action="#" method="POST">
//                                     <Form.Group>
//                                         <Form.Label>Name</Form.Label>
//                                         <Form.Control type="text" id="name" name="name" required />
//                                     </Form.Group>
//                                     <Form.Group>
//                                         <Form.Label>Email</Form.Label>
//                                         <Form.Control type="email" id="email" name="email" required />
//                                     </Form.Group>
//                                     <Form.Group>
//                                         <Form.Label>Phone</Form.Label>
//                                         <Form.Control type="tel" id="phone" name="phone" required />
//                                     </Form.Group>
//                                     <Form.Group>
//                                         <Form.Label>Password</Form.Label>
//                                         <Form.Control type="password" id="password" name="password" required />
//                                     </Form.Group>
//                                     <Form.Group>
//                                         <Form.Label>City</Form.Label>
//                                         <Form.Control type="text" id="city" name="city" required />
//                                     </Form.Group>
//                                     <div className="login-button"> {/* Center the login button */}
//                                         <Button type="submit" variant="primary" block>Sign Up</Button>
//                                     </div>
//                                 </Form>
//                                 <p className="mt-3 text-center">Already have an account? <a href="Login">Login</a></p>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }
    



import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { userAdd } from './service/UserService';
import './Signup.css'; // Import your custom CSS file
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        city: '',
        contact_no: ''
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
        if (!formData.username.trim()) validationErrors.username = "Username is required";
        if (!formData.email.trim()) validationErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Email is not valid";
        if (!formData.password.trim()) validationErrors.password = "Password is required";
        if (formData.password.length < 6) validationErrors.password = "Password should be at least 6 characters";
        if (!formData.city.trim()) validationErrors.city = "City is required";
        if (!formData.contact_no.trim()) validationErrors.contact_no = "Contact number is required";

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await userAdd(formData);
                setSuccessMessage(response.data.message);
                setErrorMessage('');
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    city: '',
                    contact_no: ''
                });
                navigate('/login/user');
            } catch (error) {
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("There was an error registering the user!");
                }
                setSuccessMessage('');
            }
        }
    };

    return (
        <div className="mini-login-container">
        <Container className="my-5">
            <Row className="justify-content-center align-items-center">
                <Col xs={5} sm={8} md={6} lg={4}>
                    <Card>
                        <Card.Body>
                        <h2 className="text-center mb-4" >Sign up <Link to="/" className="text-primary">
                                        <FaHome size={30} />
                                    </Link>   
                            </h2>
                            
                            {successMessage && <Alert variant="success">{successMessage}</Alert>}
                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        isInvalid={!!errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{textAlign:'center'}}>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="******"
                                        value={formData.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        isInvalid={!!errors.city}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ justifyContent:'center'}}>Contact Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="contact_no"
                                        placeholder="Contact Number"
                                        value={formData.contact_no}
                                        onChange={handleChange}
                                        isInvalid={!!errors.contact_no}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.contact_no}</Form.Control.Feedback>
                                </Form.Group>
                                <br/>
                                <Button type="submit" variant="primary" block style={{ display: 'block', margin: '0 auto' ,}}>Sign up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    );
}
