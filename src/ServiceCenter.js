// import React from 'react';
// import { Card, Container, Row, Col } from 'react-bootstrap';
// import './ServiceCenters.css';
// // Sample data for Pune service centers with images
// const serviceCenters = [
//   {
//     id: 1,
//     name: 'Pune Service Center 1',
//     address: '123, ABC Road, Pune',
//     contact: '+91-9876543210',
//     image: './HondaActivacustomercarenumber.png', // Replace with actual image URL
//   },
//   {
//     id: 2,
//     name: 'Pune Service Center 2',
//     address: '456, XYZ Street, Pune',
//     contact: '+91-8765432109',
//     image: './service2.jpg', // Replace with actual image URL
//   },
//   {
//     id: 3,
//     name: 'Pune Service Center 3',
//     address: '789, LMN Avenue, Pune',
//     contact: '+91-7654321098',
//     image: './service1.jpg', // Replace with actual image URL
//   },
//   {
//     id: 4,
//     name: 'Pune Service Center 4',
//     address: '789, LMN Avenue, Pune',
//     contact: '+91-7654321098',
//     image: './service1.jpg', // Replace with actual image URL
//   },
//   {
//     id: 5,
//     name: 'Pune Service Center 6',
//     address: '789, LMN Avenue, Pune',
//     contact: '+91-7654321098',
//     image: './service5.avif', // Replace with actual image URL
//   },
//   {
//     id: 6,
//     name: 'Pune Service Center 3',
//     address: '789, LMN Avenue, Pune',
//     contact: '+91-7654321098',
//     image: './service4.webp', // Replace with actual image URL
//   },
  
// ];

// export default function ServiceCenters() {
//     return (
//       <Container className="mt-5">
//         <h2 className="text-center mb-4">Pune Service Centers</h2>
//         <Row>
//           {serviceCenters.map((center) => (
//             <Col key={center.id} xs={12} md={6} lg={4} className="mb-4">
//               <Card className="service-card">
//                 <Card.Img variant="top" src={center.image} alt={center.name} className="service-card-img" />
//                 <Card.Body>
//                   <Card.Title>{center.name}</Card.Title>
//                   <Card.Text className="card-text">
//                     <strong>Address:</strong> {center.address}
//                     <br />
//                     <strong>Contact:</strong> {center.contact}
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     );
//   }

import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ServiceCenters.css';
import { SERVICE_CENTER_API_ROUTE } from './constrain/ApiConstrain';
import { getServiceCenter } from './service/UserService';

export default function ServiceCenters() {
  const [serviceCenters, setServiceCenters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchServiceCenters() {
      try {
        const response = await axios.get(SERVICE_CENTER_API_ROUTE);
        setServiceCenters(response.data);
        console.log(serviceCenters);
      } catch (error) {
        console.error('Error fetching service centers:', error);
      }
    }

    fetchServiceCenters();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/services`);
  };

  return (
   
    <Container className="mt-5">
      <h2 className="text-center mb-4">Pune Service Centers</h2>
      
      <Row>
        
        {serviceCenters.map((center) => (
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="service-card" onClick={() => handleCardClick(center.id)}>
              <Card.Img  src='./service5.avif' alt={center.name} className="service-card-img" />
              <Card.Body>
                <Card.Title>{center.name}</Card.Title>
                <Card.Text className="card-text">
                  <strong>Address:</strong> {center.address}
                  <br />
                  <strong>Contact:</strong> {center.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
