import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Pdf from "../resumes/resume.pdf";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="nav1">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">JOSE C</Navbar.Brand>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/projects">projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to={Pdf} target="_blank">
                Resume
              </Link>
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
              <NavDropdown.Item href={Pdf} target="_blank">
                Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
