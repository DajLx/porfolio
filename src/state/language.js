import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = "spanish";

export const switchLanguage = createAction("SET_LANGUAGE");

const reducer = createReducer(initialState, {
  [switchLanguage]: (state, action) =>
    state === "spanish" ? "english" : "spanish",
});
export default reducer;
