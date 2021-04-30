import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Search = (props) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    setSearchTerm(event.target.value);
    event.preventDefault();
  };
  useEffect(() => {
    const results = props.List.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    props.setList(results);
  }, [searchTerm]);

  return (
    <div>
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Type name ..."
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <a className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </a>
      </form>
    </div>
  );
};
export default Search;
