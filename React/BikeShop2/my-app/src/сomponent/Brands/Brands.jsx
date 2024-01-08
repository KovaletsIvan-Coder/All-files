import React from "react";
import "./Brands.css";
import { NavLink } from "react-router-dom";

const Brands = () => {
  return (
    <div className="brands_nav_bar">
      <NavLink className="brands_link" to="/Trek">
        Trek
      </NavLink>
      <NavLink className="brands_link" to="/Specialized">
        Specialized
      </NavLink>
      <NavLink className="brands_link" to="/Giant">
        Giant
      </NavLink>
      <NavLink className="brands_link" to="/Canyon">
        Canyon
      </NavLink>
      <NavLink className="brands_link" to="/Dartmoor">
        Dartmoor
      </NavLink>
      <NavLink className="brands_link" to="/YT">
        YT
      </NavLink>
      <NavLink className="brands_link" to="/Bergamount">
        Bergamount
      </NavLink>
    </div>
  );
};

export default Brands;
