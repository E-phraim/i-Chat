import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://facebook.com"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Widgets;
