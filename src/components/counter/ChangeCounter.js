import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";

const ChangeCounter = () => {
  const { counterValue, setCounterValue } = useContext(CounterContext);
  return (
    <>
      <div className="flex justify-center items-center gap-2 ">
        <div
          className="flex justify-center items-center shadow-inner w-10 h-10 bg-zinc-100 rounded-md cursor-pointer"
          onClick={() => setCounterValue(counterValue - 1)}
        >
          -
        </div>
        <div
          className="flex justify-center items-center shadow-inner w-10 h-10 bg-zinc-100 rounded-md cursor-pointer"
          onClick={() => setCounterValue(counterValue + 1)}
        >
          +
        </div>
      </div>
    </>
  );
};

export default ChangeCounter;
