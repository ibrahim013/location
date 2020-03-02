import React from "react";
import PropTypes from "prop-types";
import "./DisplayError.css";

const DisplayErrorComponent = ({ message }) => (
  <div className="error">{message}</div>
);

DisplayErrorComponent.propTypes = {
  message: PropTypes.string.isRequired
};
export default DisplayErrorComponent;
