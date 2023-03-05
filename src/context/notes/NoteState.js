import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Note
  const getNote = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZjBmYzYxMzY5NjM5ZDcxNmZkNjQ2In0sImlhdCI6MTY3NzcyMDM2Nn0._hxBLacfFZT9OPLYVCl7X4YlPUzbKwgAFUFHLzDl4Zc",
      },
    });
    const json = await response.json()
    setNotes(json)
  };
  // Add a Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZjBmYzYxMzY5NjM5ZDcxNmZkNjQ2In0sImlhdCI6MTY3NzcyMDM2Nn0._hxBLacfFZT9OPLYVCl7X4YlPUzbKwgAFUFHLzDl4Zc",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // TODO: API call
    const note = {
      _id: "640312a3ac49cbab8f145ddb",
      user: "63ff0fc61369639d716fd646",
      title: title,
      description: description,
      tag: tag,
      date: "2023-03-04T09:42:59.084Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    // TODO: API call
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZjBmYzYxMzY5NjM5ZDcxNmZkNjQ2In0sImlhdCI6MTY3NzcyMDM2Nn0._hxBLacfFZT9OPLYVCl7X4YlPUzbKwgAFUFHLzDl4Zc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
