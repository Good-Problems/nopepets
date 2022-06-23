import { useState } from "react";
import "../../App.css";
import volcano from "../../img/volcano.png";

function Volcano(props) {
  const [food, setFood] = useState("");
  const [volc, setVolc] = useState(false);

  function getRand(x) {
    return Math.floor(Math.random() * x) + 1;
  }

  function rollVolc() {
    let prizes = [
      "Ham Omelete",
      "Cheesesteak",
      "Yogurt Parfait",
      "Pickled Egg",
    ];
    let res = getRand(prizes.length) - 1;
    setFood(
      "You received a " + prizes[res] + "! Come back tomorrow for more food"
    );
    if (volc === true) {
      setFood("The Gods have already smiled on you today. Try again tomorrow");
    }
  }

  return (
    <div>
      <div>
        <img src={volcano} height="600vh" />
        <br />
        <br />
        Hungry citizens pray under the volcano... Some say their hungry is
        sated...
        <br />
        <br />
        <button
          onClick={() => {
            rollVolc();
            setVolc(true);
          }}
        >
          <p style={{ fontSize: "large" }}>Pray</p>
        </button>
        <br />
        <br />
        {food}
        <br />
        <br />
        <button
          onClick={() => {
            props.setPlanet("lavaland");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Volcano;
