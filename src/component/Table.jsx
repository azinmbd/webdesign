import React from "react";

const Table = (props) => {
  console.log(props);
  const renderList = () => {
    return props.List.map((item) => {
      return (
        <tr>
          <th scope="row">{item.count}</th>
          <td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.cordinationX}</td>
          <td>{item.cordinationY}</td>
          <td>
            <a type="button" className="Edit-btn btn btn-link">
              edit
            </a>
            <a type="button" className="Delete-btn btn btn-link">
              delete
            </a>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="container">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Count</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">CordinationX</th>
            <th scope="col">CordinationY</th>
          </tr>
        </thead>
        <tbody>{renderList()}</tbody>
      </table>
    </div>
  );
};
export default Table;
