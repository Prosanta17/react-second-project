import React, { useState } from "react";

// interface UseCounter {
//   object return anterface
//   count: number;
//   increment: () => void;
//   decrement: () => void;
//   reset: () => void;
// }

type UseCounter = [number, () => void, () => void, () => void]; // array return type decleration

const useCounter = (initialValue: number = 0): UseCounter => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    return setCount((prev) => {
      console.log(typeof prev);
      return prev + 1;
    });
  };

  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(initialValue);

  //   return { count, increment, decrement, reset };
  return [count, increment, decrement, reset];
};

export default useCounter;
