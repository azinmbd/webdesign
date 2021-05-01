import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchList } from "../store/actions";
import Table from "../component/Table";
import Search from "../component/Search";

const Home = () => {
  const dispatch = useDispatch();
  const List = useSelector((state) => state.FetchListReducer.data);
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);
  const setList = (results) => {
    setSearchList(results);
  };

  return (
    <section className="home-section mt-4">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1>Items List </h1>
          <Search List={List} setList={setList} />
        </div>
        <span className="line"></span>
      </div>

      <Table List={List} searchList={searchList} />
    </section>
  );
};

export default Home;
