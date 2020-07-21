import { createReducer } from "@reduxjs/toolkit";
import { toggleTheme } from "./themeActions";

const initialState = {
  themeToggler: {
    isChecked: false,
  },
};

export const themeReducer = createReducer(initialState.themeToggler, {
  [toggleTheme]: (state, { payload }) => ({ isChecked: payload }),
});
