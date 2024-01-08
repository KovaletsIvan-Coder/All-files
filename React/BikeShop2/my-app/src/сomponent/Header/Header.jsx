import React from "react";
import cl from "./Header.module.css";
import NavPanel from "../NavPanel/NavPanel";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={cl.header}>
      <NavLink to="/mainPage" className={cl.logo}>
        Bike Shop
      </NavLink>
      <NavPanel></NavPanel>
    </header>
  );
};

export default Header;
