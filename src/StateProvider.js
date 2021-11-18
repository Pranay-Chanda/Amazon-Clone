import React, { createContext, useContext, useReducer } from "react";

//Prepare dataLayer
export const StateContext = createContext();

//Provide dataLayer and wrap app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from datalayer
export const useStateValue = () => useContext(StateContext);
