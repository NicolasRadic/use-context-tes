import React from "react";
import Header from "../components/header/Header";
import UserChange from "../components/User/UserChange";

const User = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-8 justify-center items-center p-4">
        <h2 className="text-2xl font-bold">Utilisateur</h2>
        <UserChange />
      </div>
    </>
  );
};

export default User;
