import React, { useState, createContext } from "react";
import "./App.css";
import ToggleShowHide from "./ToggleShowHide";
import CounterNew from "./CounterNew";
// import Fetch from "./Fetch";
// import Todolist from "./Todolist";
// import TodolistNew from "./TodolistNew";
// import Counter from "./Counter";
// import Ternary from "./Ternary";
// import User from "./User";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { Layout } from "./Layout";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Form } from "./Form";
// import FormNew from "./FormNew";

export const UserContext = createContext();

function App() {
  const [userName, setUserName] = useState("Prosanta");

  // const client = new QueryClient();

  return (
    <>
      {/* <User name="Prosanta" age={35} email="pk@gmail.com" />
      <User name="Anwesha" age={35} email="ak@gmail.com" /> */}
      {/* <Ternary /> */}
      {/* <Counter /> */}
      {/* <Todolist /> */}
      {/* <TodolistNew /> */}
      {/* <Fetch /> */}

      {/* <BrowserRouter>
        <QueryClientProvider client={client}>
          <UserContext.Provider value={{ userName, setUserName }}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </UserContext.Provider>
        </QueryClientProvider>
      </BrowserRouter> */}

      {/* <Form /> */}
      {/* <FormNew /> */}
      {/* <ToggleShowHide /> */}
      <CounterNew />
    </>
  );
}

export default App;
