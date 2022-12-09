import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/shark.png";

const Navmain = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="mx-3 d-inline-block align-top"
          />
          <Navbar.Brand className="text-info" href="#home">
            <LinkContainer to="/">
              <Nav.Link>ECHO.DO</Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/invest">
                <Nav.Link>Invest</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/apply">
                <Nav.Link>Pitch</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navmain;
