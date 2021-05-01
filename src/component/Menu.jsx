import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LogoutReq } from "../store/actions";

import logo from "../assets/logo.svg";

const Menu = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.LoginReqReducer.data);
  const handleLogout = () => {
    dispatch(LogoutReq());
  };
  useEffect(() => {
  }, [token]);
  if (typeof(token)==="string") {
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
              to="/"
            >
              Home
            </NavLink>
          </div>

          <div>
            <NavLink to="/" className="btn btn-blue" onClick={handleLogout}>
              logout
            </NavLink>
          </div>
        </div>
      </nav>
    );
  } if(token.length==0) {
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
              to="/"
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
  }
};

export default Menu;
