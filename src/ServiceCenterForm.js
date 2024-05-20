import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { registerServiceCenter } from './service/UserService';
import Adminnav from './adminnav';
import AdminNavBar from './AdminNavBar';

export default function ServiceCenterRegister(){
    const [formData, setFormData] = useState({
        name: '',
        pass: '',
        email: '',
        phone: '',
        address: '',
        pin_code: '',
        city: '',
        state: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.name.trim()) validationErrors.name = 'Name is required';
        if (!formData.pass.trim()) validationErrors.pass = 'Password is required';
        if (!formData.email.trim()) validationErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Email is not valid';
        if (!formData.phone.trim()) validationErrors.phone = 'Phone number is required';
        if (!formData.address.trim()) validationErrors.address = 'Address is required';
        if (!formData.pin_code.trim()) validationErrors.pin_code = 'Pin code is required';
        if (!formData.city.trim()) validationErrors.city = 'City is required';
        if (!formData.state.trim()) validationErrors.state = 'State is required';

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await registerServiceCenter(formData);
                setSuccessMessage(response.data.message);
                setErrorMessage('');
                setFormData({
                    name: '',
                    pass: '',
                    email: '',
                    phone: '',
                    address: '',
                    pin_code: '',
                    city: '',
                    state: ''
                });
                // navigate('/login');  // Redirect to login after successful registration
            } catch (error) {
                setErrorMessage('There was an error registering the service center');
                setSuccessMessage('');
            }
        }
    };

    return (
        <><AdminNavBar>
            </AdminNavBar><Container className="my-5">
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8}>
                    <h3 className="text-center mb-4">Register Service Center</h3>
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name} />
                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="Enter password"
                                        name="pass"
                                        placeholder="Password"
                                        value={formData.pass}
                                        onChange={handleChange}
                                        isInvalid={!!errors.pass} />
                                    <Form.Control.Feedback type="invalid">{errors.pass}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email} />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        isInvalid={!!errors.phone} />
                                    <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        isInvalid={!!errors.address} />
                                    <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Pin Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="pin_code"
                                        placeholder="Pin Code"
                                        value={formData.pin_code}
                                        onChange={handleChange}
                                        isInvalid={!!errors.pin_code} />
                                    <Form.Control.Feedback type="invalid">{errors.pin_code}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        isInvalid={!!errors.city} />
                                    <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleChange}
                                        isInvalid={!!errors.state} />
                                    <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div style={{}}>
                            <Button type="submit" variant="primary" block className="mt-3 " style={{ display: 'block', margin: '0 auto', }}>Register</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container></>
    );
};

