import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
