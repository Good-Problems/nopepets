import { useState } from "react";
import "../../App.css";
import monster from "../../img/monster.png";
import wheel from "../../img/wheel.gif";

function Wheel(props) {
  const [prize, setPrize] = useState("");
  const [spun, setSpun] = useState(false);

  function getRand(x) {
    return Math.floor(Math.random() * x) + 1;
  }

  function spin() {
    let prizes = [
      100, 100, 100, 100, 100, 200, 200, 200, 200, 300, 300, 300, 500, 500,
      1000,
    ];
    let res = getRand(prizes.length) - 1;
    setPrize("You won " + prizes[res] + " points!");
    props.setPoints(props.points + prizes[res]);
    if (spun === true) {
      setPrize("Thanks for playing! Try again tomorrow");
    }
  }

  return (
    <div>
      <img src={monster} height="600vh" />
      <img src={wheel} height="600vh" />
      <br />
      <button
        onClick={() => {
          spin();
          setSpun(true);
        }}
      >
        <p style={{ fontSize: "large" }}>SPIN!</p>
      </button>
      <br />
      {prize}
      <br />
      <button
        onClick={() => {
          props.setPlanet("grassland");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Wheel;
