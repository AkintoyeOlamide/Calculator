import React from ".react";
import PropTypes from "prop-types";

const Display = ({ result }) => (
  <div>
    <p>{result}</p>
  </div>
);

Display.defaultProps = {
  result: "0",
};

Display.PropTypes = {
  result: PropTypes.string,
};

export default Display;
