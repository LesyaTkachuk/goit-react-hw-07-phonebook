import types from "./themeTypes";

const initialState = {
  themeToggler: {
    isChecked: false,
  },
};

export const themeReducer = (
  state = initialState.themeToggler,
  { type, payload }
) => {
  switch (type) {
    case types.LIGHT:
      return { ...state, isChecked: payload.value };

    case types.DARK:
      return { ...state, isChecked: payload.value };

    default:
      return state;
  }
};
