import { ACTION_STRING } from "../actions/actionString.js";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  reading: {},
};
const readReducer = (prevState = initialState, action) => {
  const { read } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    case read:
      const data = action.payload;
    //   console.log("prevState", prevState);
      
      return {
        ...prevState,
        reading:data,
      };
    default:
      return prevState;
  }
};

export default readReducer;