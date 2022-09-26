import React from "react";
import "./Error.css";

const Error = () => {
  document.title = "404 Page Not Found";

  return (
    <div className="error-text">
      <div>404</div>
      <span className="error-line">|</span>
      <div>Nothing here to see</div>
    </div>
  );
};

export default Error;
