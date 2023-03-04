import React from "react";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      {["Success"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          className="mb-4"
        >
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.description}</Card.Text>
            <MdDelete style={{fontSize:"135%", cursor: "pointer"}}/>
            <FaEdit style={{marginLeft: "5%", fontSize:"135%", cursor: "pointer"}}/>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Noteitem;
