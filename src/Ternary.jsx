import React from "react";

const Ternary = () => {
  const age = 18;
  const isGreen = false;
  const names = ["Prosanta", "Anwesha", "Aritra"];

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  const users = [
    { name: "Prosanta", age: 35 },
    { name: "Anwesha", age: 35 },
  ];

  return (
    <div>
      {age >= 18 ? <h1>Over age</h1> : <h1>Under age</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>Hello World</h1>
      {isGreen && <button>Click me</button>}

      <ul>
        {names.map((names, index) => {
          return <li key={index}>{names}</li>;
        })}
      </ul>

      <ul>
        {users.map((users, index) => {
          return <User key={index} name={users.name} age={users.age} />;
        })}
      </ul>

      {planets.map((planet, index) => {
        return planet.isGasPlanet && <h3 key={index}>{planet.name}</h3>;
      })}
    </div>
  );
};

const User = ({ name, age }) => {
  return <li>{`${name} age is ${age}`}</li>;
};

export default Ternary;
