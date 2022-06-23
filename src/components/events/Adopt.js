// https://i.ibb.co/THJbzXB/pet3.png
// https://i.ibb.co/80GdP21/pet2.png
// https://i.ibb.co/CWDwZ1H/pet1.png

import { useState } from "react";
import "../../App.css";
import URI from "../../URIexample";
import pet1 from "../../img/pet1.png";
import pet2 from "../../img/pet2.png";
import pet3 from "../../img/pet3.png";
import AdoptForm from "../forms/AdoptForm";

function Adopt(props) {
  const [pet, setPet] = useState("choose");
  const [response, setResponse] = useState("");

  const foo = (input) => {
    let temp = URI;
    temp.type = input.type;
    temp.name = input.text;
    temp.color = input.select;
    temp = JSON.stringify(temp);
    props.adopt(temp);
    setResponse("Congrats on your new pet " + input.text);
  };

  if (pet === "choose") {
    return (
      <div>
        <div>
          <img style={{ height: "250px" }} src={pet1} alt="pet1" border="0" />
          Grumpit
          <button
            onClick={() => {
              setPet("1");
            }}
          >
            adopt
          </button>
        </div>
        <div>
          <img style={{ height: "250px" }} src={pet2} alt="pet2" border="0" />
          Wublet
          <button
            onClick={() => {
              setPet("2");
            }}
          >
            adopt
          </button>
        </div>
        <div>
          <img style={{ height: "250px" }} src={pet3} alt="pet3" border="0" />
          Blinko
          <button
            onClick={() => {
              setPet("3");
            }}
          >
            adopt
          </button>
        </div>
      </div>
    );
  }
  if (pet === "1") {
    return (
      <div>
        <div>
          <img src={pet1} />
        </div>
        <div>
          <AdoptForm
            type="Grumpit"
            onsubmit={foo}
            label="Label"
            placeholderText="Name"
            buttonName="Adopt"
          />
        </div>
        {response}
        <div>
          <button
            onClick={() => {
              setPet("choose");
            }}
          >
            back
          </button>
        </div>
      </div>
    );
  }
  if (pet === "2") {
    return (
      <div>
        <div>
          <img src={pet2} />
        </div>
        <div>
          <AdoptForm
            type="Wublet"
            onsubmit={foo}
            label="Label"
            placeholderText="Name"
            buttonName="Adopt"
          />
        </div>
        {response}
        <div>
          <button
            onClick={() => {
              setPet("choose");
            }}
          >
            back
          </button>
        </div>
      </div>
    );
  }
  if (pet === "3") {
    return (
      <div>
        <div>
          <img src={pet3} />
        </div>
        <div>
          <AdoptForm
            type="Blinko"
            onsubmit={foo}
            label="Label"
            placeholderText="Name"
            buttonName="Adopt"
          />
        </div>
        {response}
        <div>
          <button
            onClick={() => {
              setPet("choose");
            }}
          >
            back
          </button>
        </div>
      </div>
    );
  }
}

export default Adopt;
