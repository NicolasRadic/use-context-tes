import React from "react";
import ChangeCounter from "../components/counter/ChangeCounter";
import DisplayCounter from "../components/counter/DisplayCounter";

import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-8 justify-center items-center p-4">
        <h1 className="text-2xl font-bold">Accueil</h1>
        <div className="flex gap-8 justify-center items-center">
          <ChangeCounter />
          <DisplayCounter />
        </div>
      </div>
    </>
  );
};

export default Home;
