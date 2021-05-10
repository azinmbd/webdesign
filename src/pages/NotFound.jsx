import React from "react";
import { withRouter } from "react-router-dom";

import Erorr from "../assets/404.svg";
const NotFound = (props) => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <img width="70%" src={Erorr} alt="" />
      <a className="btn btn-dark" onClick={() => props.history.push("/")}>
        go back
      </a>
    </div>
  );
};
export default withRouter(NotFound);
