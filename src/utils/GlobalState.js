import React, { useReducer, useContext } from "react";
// Don't forget to import all of your actions!
const StoreContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "save":
      const newState = [...state];
      newState.push(action.formData);
      return newState;
    case "delete":
      return state.filter(item => item.id != action.id);
    case "favor":
      return state.map(item => {
        if(item.id == action.id){
          item.isFavorite = true
        }
        return item
      })
    case "remove":
        return state.map(item => {
          if(item.id == action.id){
            item.isFavorite = false
          }
          return item
        })
  default:
    return state;
  }
};

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <StoreContext.Provider value={{state,dispatch}}>
      {props.children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
