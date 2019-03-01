import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1 className="store-header">Smurf Village</h1>
      <div className="nav-links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/smurfs-list">Smurfs</NavLink>
        <NavLink to="/smurfs-form">Add Smurf</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
