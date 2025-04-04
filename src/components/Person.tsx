import React from "react";

interface PersonProps {
  name: string;
  age: number;
  isMarraid: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  India = "India",
  USA = "USA",
  UK = "UK",
}

const Person: React.FC<PersonProps> = ({
  name,
  age,
  isMarraid,
  friends,
  country,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>
        {name} {isMarraid ? "is" : "is not"} married.
      </h1>
      <h1>
        {name}'s friends are:
        {friends.map((friend, index) => {
          return <span key={index}> {friend},</span>;
        })}
      </h1>
      <h1>
        {name} lives in {country}.
      </h1>
    </div>
  );
};

export default Person;
