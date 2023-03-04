import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NavbarComp = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <Navbar bg="warning" variant="dark" expand="lg">
      <Container>
        <Nav.Link href="/">iNotebook</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={`${location.pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${location.pathname === "/about" ? "active" : ""}`}
              href="/about"
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
              Success
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
