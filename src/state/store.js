import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import showReducer from "./show";
import languageReducer from "./language";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    show: showReducer,
    language: languageReducer,
  },
});
export default store;
