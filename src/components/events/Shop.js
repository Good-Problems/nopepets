import { useState } from "react";
import "../../App.css";
import shop from "../../img/shop.png";
import grasssword from "../../img/grasssword.png";
import icebomb from "../../img/icebomb.png";

function Shop(props) {
  return (
    <div>
      <img src={shop} height="500vh" />
      <br />
      <img src={grasssword} /> Grass Sword ... 5753 points <button>buy</button>
      <br />
      <img src={icebomb} /> Icebomb ... 1367 points <button>buy</button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          props.setPlanet("earf");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Shop;
