import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";
import { themeReducer } from "./theme/themeReducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    themeToggler: themeReducer,
  },
});

export default store;
