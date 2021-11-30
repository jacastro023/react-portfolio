import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Pdf from "../resumes/resume.pdf"



function Header() {

  return (
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
  );
}

export default Header;
