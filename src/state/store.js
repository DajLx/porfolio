import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import showReducer from "./show";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    show: showReducer,
  },
});
export default store;
