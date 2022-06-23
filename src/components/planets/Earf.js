import { useState } from "react";
import "../../App.css";
import earf from "../../img/earf.png";

function Earf(props) {
  return (
    <div>
      <img src={earf} style={{ width: "99%" }} useMap="#workmap" />
      <map name="workmap">
        <area
          shape="rect"
          coords="670,410,780,510"
          alt="Shop"
          onClick={() => {
            props.setPlanet("shop");
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

export default Earf;
