import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  fetchList,
  DeleteReq,
  EditReq,
  AddComponentReq,
} from "../store/actions";

import Table from "../component/Table";
import Search from "../component/Search";
import add from "../assets/plus-circle.svg";

const Home = (props) => {
  const dispatch = useDispatch();
  //actions from redux
  const List = useSelector((state) => state.FetchListReducer.data);
  const token = useSelector((state) => state.LoginReqReducer.data.data);
  // const deleteInfo = useSelector((state) => state.DeleteReducer.data);
  const newComponentInfo = useSelector(
    (state) => state.AddComponentReducer.data
  );
  //components state
  const [searchList, setSearchList] = useState([...List]);
  const [renderList, setRenderList] = useState([...List]);
  // const [deleteStatus, setDeleteStatus] = useState(deleteInfo.status);
  //inputs state
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [cordinationY, setcordinationY] = useState("");
  const [cordinationX, setcordinationX] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  //
  useEffect(() => {
    dispatch(fetchList());
    if (newComponentInfo.status === 200) {
      setTimeout(() => {
        window.location.replace("./");
      }, 200);
    }
  }, [dispatch, newComponentInfo, renderList, searchList]);

  const handleEdit = (id) => {
    dispatch(EditReq(id, token));
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://qiot.eu-4.evennode.com/api/components/${id}`, {
        headers: { "x-auth-token": token },
      })
      .then((response) => {
        if (response.status === 200) {
          const newList = List.filter((fItem) => fItem.id !== response.data._id);
          setRenderList([...newList])
          setSearchList([...List])
        }
      })
      .catch((err) =>{} );
  };
  const setList = (results) => {
    setRenderList(results);
  };
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
    dispatch(
      AddComponentReq(token, {
        name,
        count,
        cordinationY,
        cordinationX,
        description,
        category,
      })
    );
    event.target.reset();
  };

  const renderMessage = () => {
    if (newComponentInfo.status === 200) {
      return <h5>Added successfully</h5>;
    }
    if (newComponentInfo.status === 400) {
      return <h4>Component alredy Exists!</h4>;
    } else {
      return <div></div>;
    }
  };
  return (
    <section className="home-section mt-4 mb-3">
      <div className="container mb-3">
        <div className="row ">
          <h1 className="col-lg-3 col-sm-12">Items List </h1>
          <Search List={List} setList={setRenderList} />
          <div className=" col-lg-3">
            {token ? (
              <a
                className="btn btn-green w-100 mt-2 mb-sm-3"
                href="#target-content"
                id="button"
              >
                <img className="mr-3 " src={add} alt="" />
                New component
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <span className="line"></span>
      </div>

      <Table
        List={List}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        searchList={renderList}
      />

      <div id="target-content">
        <a href="#" className="close"></a>
        <div id="target-inner">
          <form className="" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between">
              <div className="form-group ">
                <label htmlFor="inputPassword4">name</label>
                <input
                  onChange={nameChange}
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
                type="name"
                required
                className="form-control"
                id="category"
                placeholder="category"
              />
            </div>
            <div className="modal-footer">
              <input type="submit" className="btn btn-blue" />
            </div>
            <div>{renderMessage()}</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Home);
