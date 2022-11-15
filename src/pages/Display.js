import React from "react";
import Header from "../components/header/Header";
import DisplayCounter from "../components/counter/DisplayCounter";

const Display = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-8 justify-center items-center p-4">
        <h2 className="text-2xl font-bold">Affichage</h2>
        <DisplayCounter />
      </div>
    </>
  );
};

export default Display;
