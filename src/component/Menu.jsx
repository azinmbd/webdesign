import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LogoutReq } from "../store/actions";

import logo from "../assets/logo.svg";
import user from "../assets/user.svg";

const Menu = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.LoginReqReducer.data.data);
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
            <NavLink to="/" className="btn btn-dark" onClick={handleLogout}>
              <img className="mr-3 "src={user} alt=""/>
              logout
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }else{
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
