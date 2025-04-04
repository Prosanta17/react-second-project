import React, { useContext } from "react";
import { UserContext } from "../App";
export const Home = () => {
  const { userName } = useContext(UserContext);
  return <h1>This is Home page and username is {userName}</h1>;
};
