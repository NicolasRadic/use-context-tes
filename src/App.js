import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Display from "./pages/Display";
import CounterContext from "./components/Context/CounterContext";
import UserContext from "./components/Context/UserContext";
import User from "./pages/User";

const App = () => {
  const [counterValue, setCounterValue] = useState(100);
  const [userValue, setUserValue] = useState({
    name: "Nicolas",
    surname: "Radic",
  });

  return (
    <BrowserRouter>
      <CounterContext.Provider value={{ counterValue, setCounterValue }}>
        <UserContext.Provider value={{ userValue, setUserValue }}>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/compteur" element={<Counter />} />
            <Route path="/affichage" element={<Display />} />
            <Route path="/utilisateur" element={<User />} />
          </Routes>
        </UserContext.Provider>
      </CounterContext.Provider>
    </BrowserRouter>
  );
};

export default App;
