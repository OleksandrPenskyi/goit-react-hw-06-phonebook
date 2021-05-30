import React from 'react';
import PropTypes from 'prop-types';
import actions from '../../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';

import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(id);
  };

  return (
    <li className={styles.Contact}>
      <span className={styles.Info}>
        {name}: {number}
      </span>
      <button className={styles.Btn} onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};
const mapDispatchToProps = dispath => ({
  deleteContact: id => dispath(actions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
