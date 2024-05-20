import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  const navbarStyle = {
    backgroundColor: 'grey',
  };

  const linkStyle = {
    color: 'white',
  };

  const dropdownToggleStyle = {
    backgroundColor: '#0d6efd',
    borderColor: '#0d6efd',
    color: 'white',
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
            <LinkContainer to="/service-centers">
            <Nav.Link>Service Centers</Nav.Link>
          </LinkContainer>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown
              title={<span style={linkStyle}>Login</span>}
              id="basic-nav-dropdown"
              className="btn btn-primary"
              style={dropdownToggleStyle}
            >
              <LinkContainer to="/login/user">
                <NavDropdown.Item>User</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/login/admin">
                <NavDropdown.Item>Admin</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/register/service-center">
                <NavDropdown.Item>Service Center</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
            </NavDropdown>
            <Button href="#" variant="primary" className="ms-2">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
