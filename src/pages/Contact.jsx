import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Contact = () => {
  const {
    data: catFact,
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["catFact"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {error.message} </h1>;

  return (
    <>
      <h1>This is Contact page.</h1>
      <div> {catFact?.fact}</div>
      <button onClick={refetch}>Fetch Data</button>
    </>
  );
};
