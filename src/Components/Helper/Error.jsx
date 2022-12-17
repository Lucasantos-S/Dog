import React from "react";

function Error(props) {
  if (!props.error) return null;
  return <p className="error">{props.error}</p>;
}

export default Error;
