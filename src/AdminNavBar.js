import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function AdminNavBar() {
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
    color: 'blue',
    borderRadius: '30px',
    padding: '5px 10px'
    
  };
  const buttonstyle={
      backgroundcolor: '#0d6efd',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      borderradius: '4px'
    }
  
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
           
            <LinkContainer to="/FirstPage">
              <Nav.Link style={linkStyle}>UserData</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link style={linkStyle}>Center Data</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/service-center">
              <Nav.Link style={linkStyle}>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/viewbooking">
              <Nav.Link style={linkStyle}>View Booking</Nav.Link>
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

export default AdminNavBar;
{/* <LinkContainer to="/about">
<Nav.Link style={linkStyle}>About</Nav.Link>
</LinkContainer>

<LinkContainer to="/contact">
<Nav.Link style={linkStyle}>Contact Us</Nav.Link>
</LinkContainer> */}