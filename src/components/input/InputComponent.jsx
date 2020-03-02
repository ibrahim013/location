import React from "react";
import PropTypes from "prop-types";
import "./InputComponent.css";

const InputComponent = ({ type, className, placeholder, onChange, value }) => {
  return (
    <>
      <input
        type={type}
        className={`input-element ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputComponent;
