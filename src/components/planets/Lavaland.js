import { useState } from "react";
import "../../App.css";
import lavaland from "../../img/lavaland.png";

function Lavaland(props) {
  return (
    <div>
      <img src={lavaland} useMap="#workmap" />
      <map name="workmap">
        <area
          shape="rect"
          coords="400,400,600,500"
          alt="Volcano"
          onClick={() => {
            props.setPlanet("volcano");
          }}
        />
      </map>
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

export default Lavaland;
