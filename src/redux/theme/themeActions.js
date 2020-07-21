import types from "./themeTypes";

export const toggleTheme = (value) => ({
  type: value ? types.DARK : types.LIGHT,
  payload: {
    value,
  },
});
