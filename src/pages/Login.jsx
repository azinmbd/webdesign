import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { LoginReq } from "../store/actions";
import lock from "../assets/lock.svg";

const Login = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.LoginReqReducer.data.data);
  const status = useSelector((state) => state.LoginReqReducer.data.status);
  const [newStatus, setStatus] = useState("");


  const nameChange = (event) => {
    setName(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    setStatus(status);

    event.preventDefault();
    dispatch(LoginReq({ name, password }));

      if (status === 200) {
        setTimeout(() => {
          props.history.push("/");
        }, 2000);
      } else {
        setStatus(400);
      }
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
        <div>
          {newStatus === 200 ? <h5>loged in successfully</h5> : ""}
          {newStatus === 400 ? (
            <h4>Name or password might be Invalid!!</h4>
          ) : (
            ""
          )}
        </div>
      </form>
    </section>
  );
};
export default withRouter(Login);
