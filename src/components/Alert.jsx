import React, { useState } from "react";

import './Alert.css'

const Alert = ({ content }) => {
  const [open, setOpen] = useState(true);

  if (open)
    return (
      <div
        className="alert-container"
        style={{
          background: content.mainColor,
          border: "0.1rem solid " + content.secondaryColor,
        }}
      >
        <div
          className="symbol-container"
          style={{ background: content.secondaryColor }}
        >
          <span class="material-symbols-outlined symbol">{content.symbol}</span>{" "}
        </div>

        <div className="desc-container">
          <span className="desc-title">{content.title}:</span>
          <span className="desc-text">{content.text}</span>
        </div>
        <div
          className="symbol-close-link"
          onClick={() => setOpen(false)}
        >
          <span className="material-symbols-outlined ">close</span>
        </div>
      </div>
    );
};

export default Alert;
