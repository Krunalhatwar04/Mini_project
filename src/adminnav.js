import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function Adminnav() {
  const navbarStyle = {
    backgroundColor: 'grey',
  };

  const linkStyle = {
    color: 'white',
    borderradius:'20px'
  };

  const dropdownToggleStyle = {
    backgroundColor: '#0d6efd',
    borderColor: '#0d6efd',
    color: 'white',
    borderRadius: '30px',
    padding: '5px 10px'
    
  };
  
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you really want to logout?");
    if (confirmLogout) {
      navigate('/');
    }
  };

  return (
    <Navbar expand="lg" style={navbarStyle}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand style={linkStyle}>Bike Service</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link style={linkStyle}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link style={linkStyle}>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link style={linkStyle}>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ms-auto">
        <Button onClick={handleLogout} variant="primary" className="ms-2">Logout</Button>
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Adminnav;