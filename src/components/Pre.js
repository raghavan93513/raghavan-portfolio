import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && (
        <div className="preloader-inner">
          <div className="preloader-ring" />
          <div className="preloader-ring preloader-ring-2" />
          <div className="preloader-ring preloader-ring-3" />
          <div className="preloader-text">RV</div>
        </div>
      )}
    </div>
  );
}

export default Pre;
