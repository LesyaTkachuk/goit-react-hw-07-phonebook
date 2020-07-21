import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.scss";

function ContactListItem({ id, name, number, onClickDelete }) {
  return (
    <li key={id} className={styles.item}>
      <span className={styles.name}>{name}: </span>
      <span>{number}</span>
      <button type="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  );
}
ContactListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
export default ContactListItem;
