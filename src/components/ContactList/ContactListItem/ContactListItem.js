import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  const { name, number, id } = contact;

  return (
    <li className={styles.Contact}>
      <span className={styles.Info}>
        {name}: {number}
      </span>
      <button
        className={styles.Btn}
        onClick={() => deleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
