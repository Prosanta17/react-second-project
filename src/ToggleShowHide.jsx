import React from "react";
import { useToggle } from "./Hooks/useToggle";

const ToggleShowHide = () => {
  const [state, toggle] = useToggle(false);
  return (
    <>
      <div>
        <button onClick={toggle}>{state ? "Hide" : "Show"}</button>
      </div>
      {state && <h1>Hello World</h1>}
    </>
  );
};

export default ToggleShowHide;
