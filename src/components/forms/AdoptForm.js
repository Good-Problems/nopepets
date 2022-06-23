import "../../index.css";
import { useState } from "react";
import { checkProperties } from "ethers/lib/utils";

const AdoptForm = ({
  name,
  onsubmit,
  label,
  placeholderText,
  buttonName,
  type,
}) => {
  const [text, setText] = useState("");
  const [select, setSelect] = useState("Red");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Value empty");
      return;
    }

    onsubmit({ text, type, select });

    setText("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <h1>{name}</h1>
      <div className="form-control">
        <label>{label}</label>
        <br />
        <input
          type="text"
          placeholder={placeholderText}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <select type="select" onChange={(e) => setSelect(e.target.value)}>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
        </select>
      </div>
      <input type="submit" value={buttonName} />
    </form>
  );
};

export default AdoptForm;
