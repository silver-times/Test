import React, { useState } from "react";
import ElementsList from "./ElementsList";
import SelectedElementsList from "./SelectedElementsList";
import Search from "./Search";

const Choices = ({ setShowChoice }) => {
  const [searchText, setSearchText] = useState();
  const [closeChoiceBox, setCloseChoiceBox] = useState(false);

  const saveChoicesHandler = () => {
    setShowChoice(false);
  };

  return (
    <div className="bg-[#e1e5d9] mx-auto px-5 w-[600px]">
      <h2 className="pt-5 pb-2 text-xl">Select Items</h2>
      <div className="py-5 flex">
        <Search handleSearchNote={setSearchText} />

        <label className="mx-5">Filter</label>
        <select name="cars" id="cars">
          <option value="noFilter">No filter</option>
          <option value="10">more than 10</option>
          <option value="100">more than 100</option>
          <option value="200">more than 200</option>
        </select>
      </div>

      {/* Elements List Component */}
      <ElementsList searchText={searchText} />

      <br />

      {/* Selected Elements */}
      <SelectedElementsList />

      {/* Save and Cancel Buttons  */}
      <div className="pb-5">
        <button
          onClick={saveChoicesHandler}
          className="bg-[#778C03] hover:bg-[#9bb40bfc] hover:text-black text-white py-1 px-5 "
        >
          Save
        </button>

        <button
          onClick={saveChoicesHandler}
          className="bg-[#778C03] hover:bg-[#9bb40bfc] hover:text-black text-white py-1 px-5 ml-5"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Choices;
