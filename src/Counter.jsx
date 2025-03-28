import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [display, setDisplay] = useState(true);
  const [textColor, setTextColor] = useState("black");

  const increaseValue = () => setCounter((prev) => prev + 1);
  const decreaseValue = () => setCounter((prev) => prev - 1);
  const handleReset = () => setCounter(0);

  const inputhandler = (e) => setInputValue(e.target.value);

  const handleDisplay = () => setDisplay((prev) => !prev);

  const handleColorText = () => {
    setTextColor(textColor === "black" ? "red" : "black");
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increaseValue}>Increases</button>
      <button onClick={decreaseValue}>Decreases</button>
      <button onClick={handleReset}>Reset</button>

      <input type="text" onChange={inputhandler} />
      {inputValue}

      <div>
        {display && <h1 style={{ color: textColor }}>Hello Prosanta</h1>}
        <button onClick={handleDisplay}>{!display ? "Show" : "Hide"}</button>
        <button onClick={handleColorText}>Change color</button>
      </div>
    </div>
  );
};

export default Counter;
