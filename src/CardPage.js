import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
// import img1 from './image/imgg1.jpeg';
// import img2 from './image/imgg2.jpeg';
// import img3 from './image/imgg3.jpeg';
// import img4 from './image/imgg4.jpeg';
// import img5 from './image/imgg5.jpeg';
// import img6 from './image/imgg6.jpeg';

const styles = {
  cardContainer: {
    margin: '1.5rem',
    width: '20rem',
    borderRadius: '1rem',
    boxShadow: '0px 10px 8px #999',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardBody: {
    // backgroundColor: '#dfdbdb',
    padding: '1rem',
    flex: '1',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    
  },
  cardText: {
    flex: '1',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  image: {
    alignSelf: 'center',
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  
};


export function CardPage() {
  return (
    <div>
      <Row>
        <Col md={4}>
          <Card style={styles.cardContainer}>
            <Card.Img variant="top" src='./s1.jpg' style={styles.image} />
            <Card.Body style={styles.cardBody}>
              <Card.Title>Periodic Maintenance Service</Card.Title>
              <Card.Text style={styles.cardText}>
                Complete bike care as per manufacturer recommendation based on your vehicle age and mileage. Price may vary as per service type.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={styles.cardContainer}>
            <Card.Img variant="top" src='./s2.jpg' style={styles.image} />
            <Card.Body style={styles.cardBody}>
              <Card.Title>Oil and Filter Change</Card.Title>
              <Card.Text style={styles.cardText}>
                Complete change of oil and filter to manufacturer specification.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={styles.cardContainer}>
            <Card.Img variant="top" src='s3.jpg' style={styles.image} />
            <Card.Body style={styles.cardBody}>
              <Card.Title>Vehicle Diagnostic Check</Card.Title>
              <Card.Text style={styles.cardText}>
                Initial investigation of vehicle faults, including electronic read-out of errors, fault code report and advice on any repairs required.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/><br/><br/><br/>

      <Row>
        <Col md={4}>
          <Card style={styles.cardContainer}>
            <Card.Img variant="top" src='s4.jpg' style={styles.image} />
            <Card.Body style={styles.cardBody}>
              <Card.Title>TPMS - Tyre pressure monitoring system</Card.Title>
              <Card.Text style={styles.cardText}>
                Mounting of tyres, after purchase of new tyres.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={styles.cardContainer}>
            <Card.Img variant="top" src='s5.jpg' style={styles.image} />
            <Card.Body style={styles.cardBody}>
              <Card.Title>Battery Check</Card.Title>
              <Card.Text style={styles.cardText}>
                Visual and electrical check of battery health and performance. Printout of results included.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={styles.cardContainer}>
            <Card.Img variant="top" src='s6.jpg' style={styles.image} />
            <Card.Body style={styles.cardBody}>
              <Card.Title>Tyre Change</Card.Title>
              <Card.Text style={styles.cardText}>
                Seasonal tyre change or tyre change due to replacement (excl. Tyres).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardPage;
