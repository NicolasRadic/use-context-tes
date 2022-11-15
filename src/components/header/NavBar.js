import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import UserMiniature from "./UserMiniature";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);
  const changeMenuState = () => setMenuState(!menuState);
  const closeMenu = () => setMenuState(false);

  useEffect(() => {
    function handleWindowResize() {
      window.innerWidth > 768 && closeMenu();
    }
    window.addEventListener("resize", handleWindowResize);
  });

  const LinksActive =
    "absolute md:hidden right-0 w-full top-20 py-4 bg-stone-50  shadow";
  const LinksInactive = "hidden md:flex";

  return (
    <div className="pr-2">
      <nav>
        <div className="md:hidden" onClick={changeMenuState}>
          {menuState ? (
            <XMarkIcon className="w-12" />
          ) : (
            <Bars3Icon className="w-12" />
          )}
        </div>
        <ul className={menuState ? LinksActive : LinksInactive}>
          <li className="py-2 px-4 text-center uppercase">
            <NavLink
              to="/"
              className={(nav) =>
                nav.isActive ? "border-b-2 border-zinc-300 p-1" : "p-1"
              }
            >
              accueil
            </NavLink>
          </li>
          <li className="py-2 px-4 text-center uppercase">
            <NavLink
              to="/compteur"
              className={(nav) =>
                nav.isActive ? "border-b-2 border-zinc-300 p-1" : "p-1"
              }
            >
              compteur
            </NavLink>
          </li>
          <li className="py-2 px-4 text-center uppercase">
            <NavLink
              to="/affichage"
              className={(nav) =>
                nav.isActive ? "border-b-2 border-zinc-300 p-1" : "p-1"
              }
            >
              affichage
            </NavLink>
          </li>
          <li className=" px-4 text-center uppercase">
            <UserMiniature />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
