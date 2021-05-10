import React, {  useState } from "react";
import {  useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import EditIcon from "../assets/edit.svg";
const Edit = (props) => {
  const { state } = props.location;
  const token = useSelector((state) => state.LoginReqReducer.data.data);
  // EDIT RESPONSE
  const [status, setStatus] = useState(0);
  //inputs state
  const [name, setName] = useState(state.name);
  const [count, setCount] = useState(state.count);
  const [cordinationY, setcordinationY] = useState(state.cordinationY);
  const [cordinationX, setcordinationX] = useState(state.cordinationX);
  const [description, setdescription] = useState(state.description);
  const [category, setcategory] = useState(state.category);
  //components event handlers
  const nameChange = (event) => {
    setName(event.target.value);
  };

  const countChange = (event) => {
    setCount(parseInt(event.target.value));
  };
  const cordinationYChange = (event) => {
    setcordinationY(event.target.value);
  };
  const cordinationXChange = (event) => {
    setcordinationX(event.target.value);
  };
  const descriptionChange = (event) => {
    setdescription(event.target.value);
  };
  const categoryChange = (event) => {
    setcategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://qiot.eu-4.evennode.com/api/components/${state._id}`,
        {
          name,
          count,
          cordinationY,
          cordinationX,
          description,
          category,
        },
        {
          headers: { "x-auth-token": token },
        }
      )
      .then((response) => {
        setStatus(response.status);
        renderMessage();
        setTimeout(() => {
          props.history.push("/");
        }, 500);
      })
      .catch((err) => {
        setStatus(400);
      });
    event.target.reset();
  };

  const renderMessage = () => {
    if (status === 200) {
      return <h5>changes saved successfully</h5>;
    }
    if (status === 400) {
      return <h4>componet's information couldn't change!</h4>;
    } else {
      return <div></div>;
    }
  };
  return (
    <div className="container ">
      <form className="mt-3 edit-page" onSubmit={handleSubmit}>
        <div className="form-title mb-5">
          <div className="position-relative">
            <h3>Edit information and then click submit</h3>
            <img className=" position-absolute" src={EditIcon} alt="" />
          </div>
          <span></span>
          <div>
            <table className="table table-striped table-dark mt-2">
              <thead>
                <tr>
                  <th scope="col">Count</th>
                  <th scope="col">Name</th>
                  <th scope="col">CordinationX</th>
                  <th scope="col">CordinationY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{state.count}</th>
                  <td>{state.name}</td>
                  <td>{state.cordinationX}</td>
                  <td>{state.cordinationY}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="form-group ">
            <label htmlFor="inputPassword4">name</label>
            <input
              onChange={nameChange}
              value={name}
              type="phone"
              required
              className="form-control"
              id="inputPassword4"
              placeholder="component name"
              minLength="5"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="inputPassword4">count</label>
            <input
              onChange={countChange}
              value={count}
              type="number"
              required
              className="form-control"
              id="countChange"
              placeholder="count"
            />
          </div>
        </div>
        <div className="form-group ">
          <label htmlFor="inputname4">cordinationY</label>
          <input
            onChange={cordinationYChange}
            value={cordinationY}
            type="name"
            required
            className="form-control"
            id="cordinationY"
            placeholder="cordinationY"
            size="2"
            maxLength="2"
          />
        </div>
        <div className="form-group ">
          <label htmlFor="inputname4">cordinationX</label>
          <input
            onChange={cordinationXChange}
            value={cordinationX}
            type="name"
            required
            className="form-control"
            id="cordinationX"
            placeholder="cordinationX"
            size="2"
            maxLength="2"
          />
        </div>
        <div className="form-group ">
          <label htmlFor="inputname4">description</label>
          <input
            onChange={descriptionChange}
            value={description}
            type="name"
            required
            className="form-control"
            id="description"
            placeholder="description"
            minLength="10"
          />
        </div>
        <div className="form-group ">
          <label htmlFor="inputname4">category</label>
          <input
            onChange={categoryChange}
            value={category}
            type="name"
            required
            className="form-control"
            id="category"
            placeholder="category"
          />
        </div>
        <div>{renderMessage()}</div>
        <div className="modal-footer">
          <a className="btn btn-dark" onClick={() => props.history.push("/")}>
            go back
          </a>
          <button type="submit" className="btn btn-green" >
              save changes</button>
        </div>
      </form>
    </div>
  );
};
export default withRouter(Edit);
