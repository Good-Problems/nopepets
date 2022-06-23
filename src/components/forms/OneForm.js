import { useState } from "react";

const OneForm = ({ onsubmit, label, placeholderText, buttonName }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Value empty");
      return;
    }

    onsubmit({ text });

    setText("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>{label}</label>
        <br />
        <input
          type="text"
          placeholder={placeholderText}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input type="submit" value={buttonName} />
    </form>
  );
};

export default OneForm;
