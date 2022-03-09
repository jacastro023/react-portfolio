import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Pdf from "../resumes/resume.pdf"



function Header() {

  return (
    <div>
      <div className="nav1">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">JOSE C</Navbar.Brand>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href = {Pdf} target = "_blank">Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
    <div className="nav2">
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
      <Navbar.Brand href="/">JOSE C</Navbar.Brand>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href = {Pdf} target = "_blank">Resume</NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>
    </div>
    </div>
  );
}

export default Header;
