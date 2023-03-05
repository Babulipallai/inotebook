import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: "default"});

  const handleSubmit = (e)=>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }

  const onChange = (e)=>{
    setNote({...note, [e.target.name] : e.target.value})
  }
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <Form className="my-3">
          <Form.Group className="mb-3" controlId="title" >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" name="title" onChange={onChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description" >
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" name="description" onChange={onChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddNote;
