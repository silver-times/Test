import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ELEMENT":
      if (state.finalElements.length <= 3) {
        return {
          ...state,
          finalElements: [...state.finalElements, action.payload],
        };
      }

    case "DELETE_ELEMENT":
      return {
        ...state,
        finalElements: state.finalElements.filter(
          (element) => element.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

var elements = [];

for (var i = 1; i < 301; i++) {
  elements.push({ id: i, name: "Element " + i });
}
// console.log(elements);
// var elements = {};

const initialState = {
  finalElements: [
    { id: 51, name: "Element 51" },
    { id: 251, name: "Element 251" },
  ],
  elements: elements,
};

export const AppContext = createContext({});

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        finalElements: state.finalElements,
        elements: state.elements,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
