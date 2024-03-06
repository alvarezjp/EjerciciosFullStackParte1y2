import React from "react";

const ErrorMessage = ({ mensaje }) => {
  const error = {
    color: "red",
  background: "lightgrey",
  fontSize: "20px",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px",
  textAlign:"center",
  };

  if (mensaje === null){
    return null;
  }
  return <div style={error}>{mensaje}</div>;
};

export default ErrorMessage;
