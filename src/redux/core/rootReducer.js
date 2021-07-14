import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "../modules/home/slice";
const rootReducer = combineReducers({
  homeSlice,
});

export default rootReducer;
