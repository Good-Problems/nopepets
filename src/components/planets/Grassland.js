import { useState } from "react";
import "../../App.css";
import grassland from "../../img/grassland.png";

function Grassland(props) {
  return (
    <div>
      <img src={grassland} useMap="#workmap" />
      <map name="workmap">
        <area
          shape="rect"
          coords="175,425,520,675"
          alt="Wheel"
          onClick={() => {
            props.setPlanet("wheel");
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

export default Grassland;
