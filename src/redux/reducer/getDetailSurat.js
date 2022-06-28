import { ACTION_STRING } from "../actions/actionString.js";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  ayat: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getDetailSuratReducer = (prevState = initialState, action) => {
  const { getDetailSurat } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case getDetailSurat.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case getDetailSurat.concat("_", Fulfilled):
      const data = action.payload.data;
    //   console.log("prevState", prevState);
      
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        ayat:data,
        err:{}
      };

    // case authLogin + rejected:
    case getDetailSurat.concat("_", Rejected):
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err,
      };

    default:
      return prevState;
  }
};

export default getDetailSuratReducer;