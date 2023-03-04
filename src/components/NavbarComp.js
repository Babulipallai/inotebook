import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NavbarComp = () => {
  let location = useLocation();
  
  return (
    <Navbar bg="warning" variant="dark" expand="lg">
      <Container>
        <Nav.Link href="/" style={{fontWeight: "bold", fontSize:"200%"}}>iNotebook</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft: "2%"}}>
            <Nav.Link
              className={`${location.pathname === "/" ? "active" : ""}`}
              href="/"
              style={{fontSize: "120%"}}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${location.pathname === "/about" ? "active" : ""}`}
              href="/about"
              style={{fontSize: "120%"}}
            >
              About
            </Nav.Link>
          </Nav>
          <Form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
