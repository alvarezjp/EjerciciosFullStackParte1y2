import React from "react";

const MessageGreen = ({ mensaje }) => {
  const error = {
    color: "green",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    textAlign: "center",
  };

  if (mensaje === null) {
    return null;
  }
  return <div style={error}>{mensaje}</div>;
};

export default MessageGreen;
