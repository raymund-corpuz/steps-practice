import React, { useState } from "react";

const InputNametracker = () => {
  const [name, setName] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    <div className="steps">
      <h1>Input Name tracker</h1>

      <input type="text" value={name} onChange={(e) => handleChange(e)} />
      <p>Hello {name || "Guest"}</p>
    </div>
  );
};

export default InputNametracker;
