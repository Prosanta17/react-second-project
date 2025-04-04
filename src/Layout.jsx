import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet /> {/* This renders the matched route */}
    </>
  );
};
