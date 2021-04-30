import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-lightblack">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" width="40" />
        </NavLink>
        <div className="items w-75">
          <NavLink
            activeStyle={{
              color: "#7971ea",
            }}
            to="/musiclist"
          >
            Home
          </NavLink>
        </div>

        <div>
          <NavLink to="/login" className="btn btn-dark mr-2">
            Login
          </NavLink>
          <NavLink to="/signup" className="btn btn-blue">
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
