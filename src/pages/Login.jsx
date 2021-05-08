import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { LoginReq } from "../store/actions";
import lock from "../assets/lock.svg";

const Login = (props) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.LoginReqReducer.data.status);
  const token = useSelector((state) => state.LoginReqReducer.data.data);
  const [newStatus, setStatus] = useState(status);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (status === 200) {
      setTimeout(() => {
        props.history.push("/");
      }, 500);
    }
  }, [status,token]);
  const nameChange = (event) => {
    setName(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const renderMessage = () => {
    if (status === 200) {
      return <h5>loged in successfully</h5>;
    }
    if (status === 400) {
      return <h4>Name or password might be Invalid!!</h4>;
    } else {
      return <div></div>;
    }
  };
  const handleSubmit = (event) => {
    dispatch(LoginReq({ name, password }));
    event.preventDefault();
    setStatus(status);

    
    if (status === 400) {
      setStatus(status);
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
        <div>{renderMessage()}</div>
      </form>
    </section>
  );
};
export default withRouter(Login);
