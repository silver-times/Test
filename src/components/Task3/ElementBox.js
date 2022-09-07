import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ElementBox = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteElement = () => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: props.id,
    });
  };

  return (
    <div className="flex py-5 ">
      <div className="bg-[#778C03] text-white border-solid border-2 border-sky-500 flex py-1 px-3 ">
        <h1 className="ml-2">{props.name}</h1>
        <button
          onClick={handleDeleteElement}
          className="ml-5 mr-2 font-extrabold"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ElementBox;
