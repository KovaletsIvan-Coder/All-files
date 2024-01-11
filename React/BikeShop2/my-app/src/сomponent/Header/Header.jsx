import React from "react";
import "./Header.css";
import NavPanel from "../NavPanel/NavPanel";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/mainPage" className="logo">
        Bike Shop
      </NavLink>
      <NavPanel></NavPanel>
    </header>
  );
};

export default Header;
