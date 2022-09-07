import React from "react";

const Search = ({ handleSearchNote }) => {
  return (
    <div>
      <label>Search</label>
      <input
        className="ml-5  placeholder:text-neutral-600 placeholder:text-lg border-none focus:outline-none"
        type="text"
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
};

export default Search;
