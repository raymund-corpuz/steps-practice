import React, { useState } from "react";

const Appv1 = () => {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((current) => current - 1);
  }
  function reset() {
    setCount(0);
  }
  function increment() {
    setCount((current) => current + 1);
  }
  return (
    <div>
      <h1>Simple Counter</h1>
      <h2>Count: {count}</h2>

      <button className="button" onClick={decrement}>
        Decrement
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
      <button className="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Appv1;
