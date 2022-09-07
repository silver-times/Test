import React, { useState } from "react";
import ChoiceBox from "./ChoiceBox";
import { AppProvider } from "../../context/AppContext";
import SelectedElementsList from "./SelectedElementsList";

const Task3 = () => {
  const [showChoice, setShowChoice] = useState(false);

  const openChoiceHandler = () => {
    setShowChoice(true);
  };

  return (
    <AppProvider>
      <div className="px-3 mx-auto w-[600px] ">
        <header>
          <h1 className="text-4xl font-normal mb-2 mt-2">Select Items</h1>
        </header>

        {/* Current Selected Items */}
        <SelectedElementsList />

        {/* Button to open ChoiceBox */}
        <button
          onClick={openChoiceHandler}
          className="bg-[#778C03] hover:bg-black hover:text-white  text-white font-normal py-2 px-4"
        >
          Change my choice
        </button>
        <div className="w-20% my-5">
          {showChoice && <ChoiceBox setShowChoice={setShowChoice} />}
        </div>
      </div>
    </AppProvider>
  );
};

export default Task3;
