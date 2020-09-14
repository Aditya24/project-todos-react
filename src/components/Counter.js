import React, { useState } from "react";

const Counter = () => {
  // Passing a state with functon is best practice instead of hard coding like iseState(4)
  const [count, setCount] = useState(() => {
    return 0;
  });
  const [theme, setTheme] = useState("green");

  function decrementCount() {
    setCount((previousCount) => previousCount - 1);
  }
  function incrementCount() {
    setCount((previousCount) => previousCount + 1);
    setTheme("Orange");
  }
  return (
    <div>
      <button onClick={decrementCount} style={{ fontSize: "5rem" }}>
        -
      </button>
      <span style={{ fontSize: "5rem" }}>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount} style={{ fontSize: "5rem" }}>
        +
      </button>
    </div>
  );
};

export default Counter;
