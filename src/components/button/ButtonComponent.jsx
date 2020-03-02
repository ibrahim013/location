import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = ({ onClick, title, className }) => {
  return (
    <button onClick={onClick} className={`button-element ${className}`}>
      {title}
    </button>
  );
};

export default ButtonComponent;
