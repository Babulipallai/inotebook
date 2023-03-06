import React, { useContext, useEffect, useState, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote, editNote } = context;

  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <AddNote />
      <Button
        ref={ref}
        variant="primary"
        className="d-none"
        onClick={handleShow}
      >
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="my-3">
            <Form.Group className="mb-3" controlId="etitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="etitle"
                onChange={onChange}
                value={note.etitle}
                minLength={5}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="edescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="edescription"
                onChange={onChange}
                value={note.edescription}
                minLength={5}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="etag">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter tag"
                name="etag"
                onChange={onChange}
                value={note.etag}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={note.etitle.length < 5 || note.edescription.length < 5}
            variant="primary"
            onClick={handleClose}
          >
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
