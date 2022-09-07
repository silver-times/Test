import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ElementBox from "./ElementBox";

const SelectedElementsList = () => {
  const { finalElements } = useContext(AppContext);
  return (
    <div className="flex gap-2">
      {finalElements.map((element) => (
        <ElementBox id={element.id} key={element.id} name={element.name} />
      ))}
    </div>
  );
};

export default SelectedElementsList;
