import React, { useContext } from "react";
import ChangeUserName from "../ChangeUsername";
import { UserContext } from "../App";
export const About = () => {
  const { userName } = useContext(UserContext);
  return (
    <>
      <h1>This is About page and the username is {userName}</h1>
      <ChangeUserName />
    </>
  );
};
