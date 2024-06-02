import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="#home" className="custom-brand">HL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto custom-nav">
          <Nav.Link href="#home" className="custom-nav-link">Home</Nav.Link>
          <Nav.Link href="#classes" className="custom-nav-link">Classes</Nav.Link>
          <Nav.Link href="#promo" className="custom-nav-link">Promo</Nav.Link>
          <Nav.Link href="#online-class" className="custom-nav-link">Online Class</Nav.Link>
          <Nav.Link href="#contact" className="custom-nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
