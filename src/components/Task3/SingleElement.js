import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SingleElement = (props) => {
  const { finalElements, dispatch } = useContext(AppContext);
  let maxLengthReached = true;

  const checkBoxHandler = (e) => {
    const element = {
      id: props.id,
      name: e.target.value,
    };

    if (finalElements.length === 3) {
      console.log("hi");
      maxLengthReached = false;
    } else if (finalElements.length < 3 && e.target.checked === true) {
      // console.log(e.target.value, e.target.checked);
      dispatch({
        type: "ADD_ELEMENT",
        payload: element,
      });
    } else if (e.target.checked === false) {
      maxLengthReached = false;

      dispatch({
        type: "DELETE_ELEMENT",
        payload: props.id,
      });
    }
  };

  return (
    <div className="checkboxdiv">
      <input onChange={checkBoxHandler} type="checkbox" value={props.name} />
      <label>{props.name}</label>
    </div>
  );
};

export default SingleElement;
