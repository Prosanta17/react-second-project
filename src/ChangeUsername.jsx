import React, { useState, useContext } from "react";
import { UserContext } from "./App";

export default function userName() {
  const [newUserName, setNewUserName] = useState("");
  const { setUserName } = useContext(UserContext);
  return (
    <>
      <input onChange={(e) => setNewUserName(e.target.value)} />
      <button onClick={() => setUserName(newUserName)}>Change</button>
    </>
  );
}
