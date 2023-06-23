import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = false;

export const setShow = createAction("SET_SHOW");

const reducer = createReducer(initialState, {
  [setShow]: (state, action) => action.payload,
});
export default reducer;
