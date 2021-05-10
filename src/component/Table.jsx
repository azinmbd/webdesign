import React from "react";
import {  useSelector } from "react-redux";

const Table = (props) => {
  const token = useSelector((state) => state.LoginReqReducer.data.data);

  const renderList = () => {
    if (props.searchList.length<props.List.length) {
      return props.searchList.map((item) => {
        return (
          <tr key={item._id}>
            <th scope="row">{item.count}</th>
            <td>{item.name}</td>
            <td>{item.cordinationX}</td>
            <td>{item.cordinationY}</td>
            {typeof token === "string" ? (
              <td className="table-btns">
                <a
                  className="Edit-btn btn btn-link"
                  onClick={() => props.handleEdit(item)}
                >
                  edit
                </a>
                <a
                  className="Delete-btn btn btn-link"
                  onClick={() => props.handleDelete(item._id)}
                >
                  delete
                </a>
              </td>
            ) : (
              <td></td>
            )}
          </tr>
        );
      });
    }else{
      return props.List.map((item) => {
        return (
          <tr key={item._id}>
            <th scope="row">{item.count}</th>
            <td>{item.name}</td>
            <td>{item.cordinationX}</td>
            <td>{item.cordinationY}</td>
            {typeof token === "string" ? (
              <td className="table-btns">
                <a
                  className="Edit-btn btn btn-link"
                  onClick={() => props.handleEdit( item)}
                >
                  edit
                </a>
                <a
                  className="Delete-btn btn btn-link"
                  onClick={() => props.handleDelete(item._id)}
                >
                  delete
                </a>
              </td>
            ) : (
              <td></td>
            )}
          </tr>
        );
      });
    }
  };
  return (
    <div className="container">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Count</th>
            <th scope="col">Name</th>
            <th scope="col">CordinationX</th>
            <th scope="col">CordinationY</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.searchList.length === 0 ? (
            <tr>
              <td colSpan="5">Nothing was found try typing another name!</td>
            </tr>
          ) : (
            renderList()
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
