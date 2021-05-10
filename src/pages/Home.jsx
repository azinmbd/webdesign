import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { fetchList } from "../store/actions";

import Table from "../component/Table";
import Search from "../component/Search";
import add from "../assets/plus-circle.svg";

const Home = (props) => {
  const dispatch = useDispatch();
  //actions from redux
  const List = useSelector((state) => state.FetchListReducer.data);
  const token = useSelector((state) => state.LoginReqReducer.data.data);

  //components state
  const [searchList, setSearchList] = useState([...List]);
  const [renderList, setRenderList] = useState([...List]);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch, renderList, searchList]);

  const handleEdit = (item) => {
    props.history.push({ pathname: "/edit", state: item });
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://qiot.eu-4.evennode.com/api/components/${id}`, {
        headers: { "x-auth-token": token },
      })
      .then((response) => {
        const newList = List.filter((fItem) => fItem.id !== response.data._id);
        setRenderList([...newList]);
        setSearchList([...List]);
      })
      .catch((err) => {});
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
                // href="#target-content"
                onClick={() => props.history.push("/add")}
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
    </section>
  );
};

export default withRouter(Home);
