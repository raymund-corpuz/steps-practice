import React, { useState } from "react";

const ToggleVisibility = () => {
  const [isShow, setIsShow] = useState(true);

  function handleShow() {
    setIsShow(!isShow);
    console.log(isShow);
  }

  return (
    <div className="steps">
      <h1>ToggleVisibilty</h1>

      {!isShow && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
          praesentium? Vel temporibus molestiae ullam nemo eveniet quis!
          Recusandae hic architecto tenetur vel dignissimos earum doloremque
          reprehenderit ea aut, veniam fugit?
        </p>
      )}
      <button
        style={{
          backgroundColor: "#7950f2",
          color: "#fff",
          paddingTop: "8px",
          paddingBottom: "8px",
          paddingRight: "16px",
          paddingLeft: "16px",
        }}
        onClick={handleShow}
      >
        {" "}
        {isShow ? "Show" : "Hide"}
      </button>
    </div>
  );
};

export default ToggleVisibility;
