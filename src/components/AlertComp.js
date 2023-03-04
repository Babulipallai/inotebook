import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertComp = (props) => {
  return (
    <div>
      {["success"].map((variant) => (
        <Alert key={variant} variant={variant}>
          {props.alert}
        </Alert>
      ))}
    </div>
  );
};

export default AlertComp;
