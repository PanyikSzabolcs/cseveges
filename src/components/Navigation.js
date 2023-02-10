import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/fire.png";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} style={{ width: 50, height: 50 }} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
              <Nav.Link>Bejelentkezés</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chat">
              <Nav.Link>Csevegés</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Menü" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Interakció</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Másik interakció
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Valami</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Elkülönített Link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
