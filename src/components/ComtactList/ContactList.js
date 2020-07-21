import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Spinner from "../../common/Spinner/Spinner";
import ContactListItem from "../ContactListItem/ContactListItemContainer";

import styles from "./ContactList.module.scss";

function ContactList({ contacts, isLoading, isChecked, getContacts }) {
  useEffect(() => {
    getContacts();
  }, [getContacts]);
  return (
    <>
      {isLoading && <Spinner />}
      {contacts.length > 0 && (
        <ul
          className={`${styles.list} ${
            isChecked ? styles.list__dark : styles.list__light
          }`}
        >
          {contacts.map(({ id }) => (
            <ContactListItem key={id} id={id} />
          ))}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,

  isLoading: PropTypes.bool.isRequired,
  isChecked: PropTypes.bool.isRequired,
  getContacts: PropTypes.func.isRequired,
};

export default ContactList;
