import { createAction, createReducer } from "@reduxjs/toolkit";

export const changeTheme = createAction("CHANGE_THEME");

const initialState = "Soft";

const reducer = createReducer(initialState, {
  [changeTheme]: (state, action) => action.payload,
});

export default reducer;
