import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <Form className="my-3">
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              onChange={onChange}
              minLength={5}
              required
              value={note.title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              name="description"
              onChange={onChange}
              minLength={5}
              required
              value={note.description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tag">
            <Form.Label>Tag</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter tag"
              name="tag"
              onChange={onChange}
              minLength={5}
              required
              value={note.tag}
            />
          </Form.Group>
          <Button
            disabled={note.title.length < 5 || note.description.length < 5}
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Add Note
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddNote;
