import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Formik } from "formik";
import * as Yup from "yup";
import { loginUser } from "./service/UserService";

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="mini-login-container">
      <Container className="my-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">
                  Login
                  <Link to="/" className="text-primary">
                    <FaHome size={30} />
                  </Link>
                </h2>

                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={async (
                    values,
                    { setSubmitting, setErrors, setStatus }
                  ) => {
                    try {
                      const response = await loginUser(values);
                      setStatus({ success: response.data.message });
                    } catch (error) {
                      if (error.response && error.response.data) {
                        setErrors({ submit: error.response.data.message });
                      } else {
                        setErrors({ submit: "There was an error logging in!" });
                      }
                    }
                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    status,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      {status && status.success && (
                        <Alert variant="success">{status.success}</Alert>
                      )}
                      {errors.submit && (
                        <Alert variant="danger">{errors.submit}</Alert>
                      )}
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.email && !!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.password && !!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <div className="text-center mt-3">
                        <Button
                          type="submit"
                          variant="primary"
                          block
                          disabled={isSubmitting}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="text-center mt-3">
                  <Link to="/signup">Don't have an account? Sign up</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
