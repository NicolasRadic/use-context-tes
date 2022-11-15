import React from "react";
import ChangeCounter from "../components/counter/ChangeCounter";
import Header from "../components/header/Header";

const Counter = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-8 justify-center items-center p-4">
        <h2 className="text-2xl font-bold">Compteur</h2>
        <ChangeCounter />
      </div>
    </>
  );
};

export default Counter;
