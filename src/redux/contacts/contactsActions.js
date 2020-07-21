import types from "./contactsTypes";
import { uuid } from "uuidv4";

const addContact = (contact) => {
  return {
    type: types.ADD_CONTACT,
    payload: {
      contact: { id: uuid(), name, number },
    },
  };
};
const deleteContact = (id) => {
  return {
    type: types.DELETE_CONTACT,
    payload: {
      id,
    },
  };
};
const filterContacts = (text) => {
  return {
    type: types.FILTER_CONTACTS,
    payload: {
      text,
    },
  };
};
export default {
  addContact,
  deleteContact,
  filterContacts,
};
