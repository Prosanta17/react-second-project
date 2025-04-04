import React from "react";
import Person, { Country } from "./components/Person";

const TypesComp: React.FC = () => {
  return (
    <div>
      <Person
        name="Anwesha"
        age={20}
        isMarraid={true}
        friends={["Arindam", "Goutam"]}
        country={Country.USA}
      />
    </div>
  );
};

export default TypesComp;
