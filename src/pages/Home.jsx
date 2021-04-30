import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchList } from "../store/actions";
import Table from "../component/Table";

const Home = () => {
  const dispatch = useDispatch();
  const List = useSelector((state) => state.FetchListReducer.data);
  console.log(List);
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <section className="home-section">
      <div className="container">
        <h1>Items List </h1>
        <span></span>
      </div>

      <Table List={List} />
    </section>
  );
};

export default Home;
