import React from "react";
import PropTypes from 'prop-types';
import "./ButtonComponent.css";

const ButtonComponent = ({ onClick, title, className }) => {
  return (
    <button onClick={onClick} className={`button-element ${className}`}>
      {title}
    </button>
  );
};

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}
export default ButtonComponent;
