import { useState } from "react";
import "../../App.css";
import universe from "../../img/universe.png";

function Universe(props) {
  return (
    <div>
      <img src={universe} useMap="#workmap" />
      <map name="workmap">
        <area
          shape="circle"
          coords="170,445,45"
          alt="Lavaland"
          onClick={() => {
            props.setPlanet("lavaland");
          }}
        />
        <area
          shape="circle"
          coords="368,580,68"
          alt="Earf"
          onClick={() => {
            props.setPlanet("earf");
          }}
        />
        <area
          shape="circle"
          coords="668,410,28"
          alt="Grassland"
          onClick={() => {
            props.setPlanet("grassland");
          }}
        />
        <area
          shape="circle"
          coords="488,441,3"
          alt="Eye"
          onClick={() => {
            props.setPlanet("eye");
          }}
        />
      </map>
    </div>
  );
}

export default Universe;
