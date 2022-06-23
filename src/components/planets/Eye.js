import { useState } from "react";
import "../../App.css";
import eye from "../../img/eye.png";

function Eye(props) {
  return (
    <div>
      <img src={eye} height="750vh" />
      <br />
      <button
        onClick={() => {
          props.setPlanet("universe");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Eye;
