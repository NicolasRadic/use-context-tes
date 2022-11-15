import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";

const DisplayCounter = () => {
  const { counterValue } = useContext(CounterContext);
  return (
    <>
      <div className="flex justify-between items-center gap-2 w-36 h-10 p-2 shadow-inner bg-zinc-100 rounded-md">
        <h3>Compteur :</h3>
        <p>{counterValue}</p>
      </div>
    </>
  );
};

export default DisplayCounter;
