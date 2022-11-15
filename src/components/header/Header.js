import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex h-20 justify-between items-center shadow-sm">
      <h1 className="pl-2 text-3xl">Use Context</h1>
      <NavBar />
    </div>
  );
};

export default Header;
