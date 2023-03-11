import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const NavbarComp = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar bg="warning" variant="dark" expand="lg">
      <Container>
        <Nav.Link href="/" style={{ fontWeight: "bold", fontSize: "200%" }}>
          iNotebook
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: "2%" }}>
            <Nav.Link
              className={`${location.pathname === "/" ? "active" : ""}`}
              href="/"
              style={{ fontSize: "120%" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${location.pathname === "/about" ? "active" : ""}`}
              href="/about"
              style={{ fontSize: "120%" }}
            >
              About
            </Nav.Link>
          </Nav>
          {!localStorage.getItem("token") ? (
            <Form className="d-flex">
              <Button href="/login" className="mx-2">
                Login
              </Button>
              <Button href="/signup" className="mx-2">
                Signup
              </Button>
            </Form>
          ) : (
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
