import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6402c7f43b4adb5f00d7a46f",
      user: "63ff0fc61369639d716fd646",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-03-04T04:24:20.897Z",
      __v: 0,
    },
    {
      _id: "6402c86e3b4adb5f00d7a472",
      user: "63ff0fc61369639d716fd646",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-03-04T04:26:22.677Z",
      __v: 0,
    },
    {
      "_id": "64030f0dd719a39b1377d23e",
      "user": "63ff0fc61369639d716fd646",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "Personal",
      "date": "2023-03-04T09:27:41.028Z",
      "__v": 0
    },
    {
      "_id": "64030f0ed719a39b1377d240",
      "user": "63ff0fc61369639d716fd646",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "Personal",
      "date": "2023-03-04T09:27:42.085Z",
      "__v": 0
    },
    {
      "_id": "640312a1ac49cbab8f145dd7",
      "user": "63ff0fc61369639d716fd646",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "Personal",
      "date": "2023-03-04T09:42:57.118Z",
      "__v": 0
    },
    {
      "_id": "640312a2ac49cbab8f145dd9",
      "user": "63ff0fc61369639d716fd646",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "Personal",
      "date": "2023-03-04T09:42:58.127Z",
      "__v": 0
    },
    {
      "_id": "640312a3ac49cbab8f145ddb",
      "user": "63ff0fc61369639d716fd646",
      "title": "My title",
      "description": "Please wake up early",
      "tag": "Personal",
      "date": "2023-03-04T09:42:59.084Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag)=>{
    // TODO: API call
    const note = {
      "_id": "640312a3ac49cbab8f145ddb",
      "user": "63ff0fc61369639d716fd646",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-03-04T09:42:59.084Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }

  // Delete a Note
  const deleteNote = () => {

  }

  // Edit a Note
  const editNote = () => {

  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
