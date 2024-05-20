// import { useState } from "react";
// import { Card, Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import "./StyleForm.css";
// // import s3 from './s3.png'

// function FormExample() {
//   return (
//     <Container>
//       <Row>
//         <Col className="">
//           <Card className="card-container">
//             <Form className="form">
//               <Form.Group className="mb-3">
//                 <h5>Confirm Your Booking</h5>
//                 <Form.Control type="text" placeholder="Enter Name" />
//                 <Form.Text className="text-muted"></Form.Text>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control type="text" placeholder="Enter address" />
//                 <Form.Text className="text-muted"></Form.Text>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control type="date" placeholder="Enter Date" />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control type="text" placeholder="Enter Brand" />
//                 <Form.Text className="text-muted"></Form.Text>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Select aria-label="Select Service">
//                   <option>--------Select Service--------</option>
//                   <option>Standard Service</option>
//                   <option>Basic Service</option>
//                   <option>Bike Service</option>
//                   <option>Normal Service</option>
//                   <option>Medium Service</option>
//                 </Form.Select>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control type="text" placeholder="Enter Description" />
//                 <Form.Text className="text-muted"></Form.Text>
//               </Form.Group>
//               <Button variant="primary" type="submit">
//                 Confirm
//               </Button>
//             </Form>
//           </Card>
//         </Col>

//         <Col>
//           <Card className="card2">
//             <Card.Img variant="top" src="./service2.jpg" />
//             <Card.Body>
//               <Card.Title></Card.Title>
//               <Card.Text>
//                 <h3>
//                   10,000+ <span>HAPPY CUSTOMERS</span>
//                 </h3>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default FormExample;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
// import { Card, Container, Button, Col, Form, Row,Alert } from 'react-bootstrap';
// import './StyleForm.css';
// import axios from 'axios';
// import { API_BASE_URL } from './constrain/ApiConstrain';
// export const SERVICE_BOOKING_API_ROUTE = `${API_BASE_URL}/servicecenters/booking`;

// export function ServiceBooking(user) {
//   return axios.post(SERVICE_BOOKING_API_ROUTE, user);
// }

// function FormExample() {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     date: '',
//     brand: '',
//     service: '',
//     description: ''
//   });

//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     ServiceBooking(formData)
//       .then((response) => {
//         console.log('Booking confirmed:', response.data);
//         navigate('/'); // Navigate to home page after successful booking
//       })
//       .catch((error) => {
//         console.error('There was an error booking the service!', error);
//       });
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Card className='card-container'>

//             <Form className='form' onSubmit={handleSubmit}>
//               <Form.Group className="mb-3">
//                 <h5>Confirm Your Booking</h5>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter address"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="date"
//                   placeholder="Enter Date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Brand"
//                   name="brand"
//                   value={formData.brand}
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Select
//                   aria-label="Select Service"
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                 >
//                   <option value="">--------Select Service--------</option>
//                   <option value="Standard Service">Standard Service</option>
//                   <option value="Basic Service">Basic Service</option>
//                   <option value="Bike Service">Bike Service</option>
//                   <option value="Normal Service">Normal Service</option>
//                   <option value="Medium Service">Medium Service</option>
//                 </Form.Select>
//               </Form.Group>

//               <Form.Group className='mb-3'>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit">Confirm</Button>
//             </Form>
//           </Card>
//         </Col>

//         <Col>
//           <Card className='card2'>
//             <Card.Img variant="top" src="./service2.jpg" />
//             <Card.Body>
//               <Card.Title></Card.Title>
//               <Card.Text>
//                 <h3>10,000+ <span>HAPPY CUSTOMERS</span></h3>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default FormExample;

// import { useState } from "react";
// import {
//   Card,
//   Container,
//   Button,
//   Col,
//   Form,
//   Row,
//   Alert,
// } from "react-bootstrap";
// import "./StyleForm.css";
// import axios from "axios";
// import { API_BASE_URL } from "./constrain/ApiConstrain";
// import Adminnav from "./adminnav";

// export const SERVICE_BOOKING_API_ROUTE = `${API_BASE_URL}/servicecenters/booking`;

// export function ServiceBooking(user) {
//   return axios.post(SERVICE_BOOKING_API_ROUTE, user);
// }

// function FormExample() {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     date: "",
//     brand: "",
//     service: "",
//     description: "",
//   });

//   const [showAlert, setShowAlert] = useState(false); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     ServiceBooking(formData)
//       .then((response) => {
//         console.log("Booking confirmed:", response.data);
//         setShowAlert(true); // Show the alert on successful booking
//       })
//       .catch((error) => {
//         console.error("There was an error booking the service!", error);
//       });
//   };

//   return (
//     <><Adminnav /><Container>
//       <Row>
//         <Col>
//           <Card className="card-container">
//             <Form className="form" onSubmit={handleSubmit}>
//               {showAlert && (
//                 <Alert variant="success">Booking Confirmed...</Alert>
//               )}
//               <Form.Group className="mb-3">
//                 <h5>Confirm Your Booking</h5>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Name"
//                   name="name"
//                   value={formData.name}
//                   required
//                   onChange={handleChange} />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter address"
//                   name="address"
//                   value={formData.address}
//                   required
//                   onChange={handleChange} />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="date"
//                   placeholder="Enter Date"
//                   name="date"
//                   value={formData.date}
//                   required
//                   onChange={handleChange} />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Brand"
//                   name="brand"
//                   value={formData.brand}
//                   required
//                   onChange={handleChange} />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Select
//                   aria-label="Select Service"
//                   name="service_type"
//                   value={formData.service}
//                   onChange={handleChange}
//                 >
//                   <option value="select ">--------Select Service--------</option>
//                   <option value="Standard Service">Standard Service</option>
//                   <option value="Basic Service">Basic Service</option>
//                   <option value="Bike Service">Bike Service</option>
//                   <option value="Normal Service">Normal Service</option>
//                   <option value="Medium Service">Medium Service</option>
//                 </Form.Select>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="texarea"
//                   placeholder="Enter Description"
//                   name="description"
//                   value={formData.description}
//                   required
//                   onChange={handleChange} />
//               </Form.Group>

//               <Button variant="primary" type="submit">
//                 Confirm
//               </Button>
//             </Form>
//           </Card>
//         </Col>

//         <Col>
//           <Card className="card2">
//             <Card.Img variant="top" src="./service2.jpg" />
//             <Card.Body>
//               <Card.Title></Card.Title>
//               <Card.Text>
//                 <h3>
//                   10,000+ <span>HAPPY CUSTOMERS</span>
//                 </h3>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container></>
//   );
// }

// export default FormExample;


import { useState } from "react";
import {
  Card,
  Container,
  Button,
  Col,
  Form,
  Row,
  Alert,
} from "react-bootstrap";
import "./StyleForm.css";
import axios from "axios";
import { API_BASE_URL } from "./constrain/ApiConstrain";
import Adminnav from "./adminnav";

export const SERVICE_BOOKING_API_ROUTE = `${API_BASE_URL}/servicecenters/booking`;

export function ServiceBooking(user) {
  return axios.post(SERVICE_BOOKING_API_ROUTE, user);
}

function FormExample() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    brand: "",
    service_type: "",  // Change to match the database column
    description: "",
  });

  const [showAlert, setShowAlert] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ServiceBooking(formData)
      .then((response) => {
        console.log("Booking confirmed:", response.data);
        setShowAlert(true); // Show the alert on successful booking
      })
      .catch((error) => {
        console.error("There was an error booking the service!", error);
      });
  };

  return (
    <>
      <Adminnav />
      <Container>
        <Row>
          <Col>
            <Card className="card-container">
              <Form className="form" onSubmit={handleSubmit}>
                {showAlert && (
                  <Alert variant="success">Booking Confirmed...</Alert>
                )}
                <Form.Group className="mb-3">
                  <h5>Confirm Your Booking</h5>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    required
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    name="address"
                    value={formData.address}
                    required
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="date"
                    placeholder="Enter Date"
                    name="date"
                    value={formData.date}
                    required
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter Brand"
                    name="brand"
                    value={formData.brand}
                    required
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Select
                    aria-label="Select Service"
                    name="service_type"  // Change to match the database column
                    value={formData.service_type}
                    required
                    onChange={handleChange}
                  >
                    <option value="">--------Select Service--------</option>
                    <option value="Standard Service">Standard Service</option>
                    <option value="Basic Service">Basic Service</option>
                    <option value="Bike Service">Bike Service</option>
                    <option value="Normal Service">Normal Service</option>
                    <option value="Medium Service">Medium Service</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter Description"
                    name="description"
                    value={formData.description}
                    required
                    onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Confirm
                </Button>
              </Form>
            </Card>
          </Col>

          <Col>
            <Card className="card2">
              <Card.Img variant="top" src="./service2.jpg" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <h3>
                    10,000+ <span>HAPPY CUSTOMERS</span>
                  </h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FormExample;
