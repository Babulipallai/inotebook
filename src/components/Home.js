import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Notes from "./Notes";

export default function Home() {
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <Form className="my-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Notes />
    </div>
  );
}
