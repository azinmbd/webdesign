import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import lock from "../assets/lock.svg";
import axios from "axios";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://qiot.eu-4.evennode.com/api/users", {
        name,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          setStatus(response.status);
          setTimeout(() => {
            props.history.push("/");
          }, 2000);
        }
      })
      .catch((err) => setStatus("400"));
  };

  return (
    <section className="login-bg container-fluid mt-5">
      <form className="col-lg-6 col-sm-12 m-auto" onSubmit={handleSubmit}>
        <div>
          <h3 className="col-lg-6 p-0">Signup</h3>
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
          {status === 200 ? <h5>Your account was successfully created</h5> : ""}
          {status === 400 ? <h4>Name or password might be Invalid!!</h4> : ""}
        </div>
      </form>
    </section>
  );
};
export default withRouter(Signup);
