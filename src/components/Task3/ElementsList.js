import React, { useContext } from "react";
import SingleElement from "./SingleElement";
import { AppContext } from "../../context/AppContext";

const ElementsList = ({ searchText }) => {
  const { elements } = useContext(AppContext);

  return (
    <div className="smallWindow">
      {elements.map((element) => (
        <SingleElement id={element.id} name={element.name} key={element.id} />
      ))}
    </div>
  );
};

export default ElementsList;
