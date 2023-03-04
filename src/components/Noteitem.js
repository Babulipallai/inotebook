import React from "react";
import Card from "react-bootstrap/Card";

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
            <Card.Text>
              {note.description} Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. At, hic magni dolorum excepturi obcaecati eos ad
              perferendis deserunt magnam rerum.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Noteitem;
