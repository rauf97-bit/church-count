import { createContext, useReducer } from "react";
import { RegisteredData } from "./addUserReducer";

const INITIAL_STATE = {
  email: "",
  fname: "",
  lname: "",
  unit: "",
  phonenumber: "",
  imageUrl: ""
};

export const AddUserContext = createContext(INITIAL_STATE);

export const AddUserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegisteredData, INITIAL_STATE);

  const value = {
    email: state.email,
    fname: state.fname,
    lname: state.lname,
    unit: state.unit,
    phonenumber: state.phonenumber,
    imageUrl: state.imageUrl,
    dispatch,
  };
  return (
    <AddUserContext.Provider value={value}>{children}</AddUserContext.Provider>
  );
};
