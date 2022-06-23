import { useEffect, useState } from "react";
import "../../App.css";
import pet1 from "../../img/pet1.png";
import pet2 from "../../img/pet2.png";
import pet3 from "../../img/pet3.png";
import OneForm from "../forms/OneForm";

function Pets(props) {
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");

  async function init() {
    let petType = JSON.parse(props.petInfo);
    setName(petType.name);
    petType = petType.type;

    if (petType === "Grumpit") {
      setPic(pet1);
    }
    if (petType === "Wublet") {
      setPic(pet2);
    }
    if (petType === "Blinko") {
      setPic(pet3);
    }
  }

  useEffect(() => {
    init();
  });

  return (
    <div>
      <p>You have {props.petNum} pets </p>
      <br />
      <OneForm
        onsubmit={props.seePet}
        label="See your pets"
        placeholderText="Pet Number"
        buttonName="See"
      />
      <br />
      {name}
      <br />
      <img src={pic} style={{ height: "300px" }} />
      <br />
      {props.petInfo}
    </div>
  );
}

export default Pets;
