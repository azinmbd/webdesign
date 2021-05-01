import React from "react";
import { useDispatch, useSelector } from "react-redux";


const Table = (props) => {
  const token = useSelector((state) => state.LoginReqReducer.data);
  const renderList = () => {
      return props.searchList.map((item) => {
        return (
          <tr key={item._id}>
            <th scope="row">{item.count}</th>
            <td>{item.name}</td>
            <td>{item.cordinationX}</td>
            <td>{item.cordinationY}</td>
           {typeof(token)==="string"?  <td className="table-btns">
              <a type="button" className="Edit-btn btn btn-link">
                edit
              </a>
              <a type="button" className="Delete-btn btn btn-link">
                delete
              </a>
            </td>: ""}
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
          </tr>
        </thead>
        <tbody>{props.searchList.length==0 ?<tr><td colSpan="5">Nothing was found try typing another name!</td></tr> : renderList()}</tbody>
      </table>
    </div>
  );
};
export default Table;
