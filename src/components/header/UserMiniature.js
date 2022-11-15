import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";

const User = () => {
  const { userValue } = useContext(UserContext);

  const initials = userValue.name[0] + userValue.surname[0];

  const [userState, setUserState] = useState(false);
  const changeUserState = () => setUserState(!userState);

  return (
    <>
      <div
        className="shadow-inner bg-zinc-100 p-2 rounded-full cursor-pointer"
        onClick={changeUserState}
      >
        <div
          className={
            userState
              ? "absolute translate-y-7 translate-x-0.5 w-16 overflow-hidden inline-block"
              : "hidden"
          }
        >
          <div className=" h-3 w-3 bg-zinc-100 rotate-45 transform origin-bottom-left"></div>
        </div>
        {initials}
      </div>
      <div
        className={
          userState
            ? "absolute md:right-0  md:translate-x-0 p-4 bg-zinc-100 text-left translate-y-2 max-[640px]:left-1/2 -translate-x-1/2  "
            : "hidden "
        }
      >
        <p className="mb-1">{userValue.name}</p>
        <p className="mb-1">{userValue.surname}</p>
        <Link
          to="/utilisateur"
          className="bg-zinc-300 p-1 rounded-full cursor-pointer"
        >
          changer
        </Link>
      </div>
    </>
  );
};

export default User;
