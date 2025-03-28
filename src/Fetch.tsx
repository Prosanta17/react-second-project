import Axios from "axios";
import React, { useEffect, useState } from "react";

interface AgePrediction {
  name: string;
  age: number;
}

const Fetch: React.FC = () => {
  const [catFact, setCatFact] = useState<string>("");
  const [predict, setPredict] = useState<AgePrediction | null>(null);
  const [personName, setPersonName] = useState<string>("");
  const [generatedText, setGeneratedText] = useState<string>("");

  const fecthCatFact = async () => {
    const response = await Axios.get("https://catfact.ninja/fact");
    setCatFact(response.data.fact);
  };

  const handlePredictAge = async () => {
    if (personName.trim() === "") return;
    const response = await Axios.get(
      `https://api.agify.io/?name=${personName}`
    );
    setPredict(response.data);
    console.log(predict);
  };

  const fetchData = async (data: any) => {
    const response = await Axios.get(
      `https://jsonplaceholder.typicode.com/${data}`
    );
    setGeneratedText(response.data[0].title);
  };

  useEffect(() => {
    fecthCatFact();
    fetchData("posts");
  }, []);

  return (
    <div>
      <button
        className="px-5 py-3 bg-amber-700 text-white rounded cursor-pointer"
        onClick={fecthCatFact}
      >
        Get cat fact
      </button>
      <p>{catFact}</p>
      <div className="my-5">
        <input
          type="text"
          placeholder="Ex.. Prosanta"
          className="border-1 border-black rounded-l px-2"
          onChange={(e) => setPersonName(e.target.value)}
        />
        <button
          onClick={handlePredictAge}
          className="bg-blue-500 border-1 border-blue-500 text-white rounded-r px-2 cursor-pointer"
        >
          Predict Age
        </button>
        {personName && predict !== null && (
          <p>
            {predict?.name} predict age is {predict?.age}
          </p>
        )}
        <div className="my-5 flex gap-2 justify-center">
          <button
            onClick={() => fetchData("albums")}
            className="bg-blue-500 border-1 border-blue-500 text-white rounded px-2 cursor-pointer"
          >
            Albums
          </button>
          <button
            onClick={() => fetchData("posts")}
            className="bg-orange-500 border-1 border-orange-500 text-white rounded px-2 cursor-pointer"
          >
            Posts
          </button>
          <button
            onClick={() => fetchData("photos")}
            className="bg-green-500 border-1 border-green-500 text-white rounded px-2 cursor-pointer"
          >
            Photos
          </button>
        </div>
        <p>{generatedText}</p>
      </div>
    </div>
  );
};

export default Fetch;
