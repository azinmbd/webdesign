import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchList } from "../store/actions";
import { withRouter } from "react-router-dom";
import axios from "axios";
const Add = (props) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.LoginReqReducer.data.data);

  //inputs state
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [cordinationY, setcordinationY] = useState("");
  const [cordinationX, setcordinationX] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  //Add state
  const [status, setStatus] = useState(0);

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
      .post(
        "http://qiot.eu-4.evennode.com/api/components/",

        {
          name,
          count,
          cordinationY,
          cordinationX,
          description,
          category,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        setStatus(response.status);
        dispatch(fetchList());
        renderMessage();
        setTimeout(() => {
          props.history.replace("./");
        }, 500);
      })
      .catch((err) => {
        setStatus(400);
      });
    event.target.reset();
  };

  const renderMessage = () => {
    if (status === 200) {
      return <h5>Added successfully</h5>;
    }
    if (status === 400) {
      return <h4>Component alredy Exists!</h4>;
    } else {
      return <div></div>;
    }
  };
  return (
    <div className="container ">
      <form className="mt-3 edit-page" onSubmit={handleSubmit}>
        <div className="form-title mb-5">
          <h3>Fill required information</h3>
          <span></span>
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
          <button type="submit" className="btn btn-blue">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Add);
