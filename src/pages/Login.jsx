import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { LoginReq } from "../store/actions";
import lock from "../assets/lock.svg";

const Login = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.LoginReqReducer.data);
  console.log(token);

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(LoginReq({ name, password }));
    if (typeof token === "string") {
      props.history.push("/");
    }else{
        renderError()
    }
};
const renderError = (text) => {

      
  };
  return (
    <section className="login-bg container-fluid mt-5">
      <form className="col-lg-6 col-sm-12 m-auto" onSubmit={handleSubmit}>
        <div>
          <h3 className="col-lg-6 p-0">Login</h3>
          <img src={lock} alt="" />
          <span className="line"></span>
        </div>
        <div className="form-group ">
          <label htmlFor="inputname4">name</label>
          <input
            onChange={nameChange}
            type="name"
            required
            className="form-control"
            id="inputname4"
            placeholder="name"
          />
        </div>
        <div className="form-group ">
          <label htmlFor="inputPassword4">Password</label>
          <input
            onChange={passwordChange}
            type="password"
            required
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
        <div className="form-group mt-4 mb-0">
          <input type="submit" className="btn btn-blue w-100 " />
        </div>
      <div>{renderError()}</div>
      </form>
    </section>
  );
};
export default withRouter(Login);
