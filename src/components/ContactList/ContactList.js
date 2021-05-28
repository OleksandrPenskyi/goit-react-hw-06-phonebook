import React from 'react';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

const ContactList = ({ filteredContacts, deleteContact }) => (
  <ul>
    {filteredContacts.map(contact => (
      <ContactListItem
        contact={contact}
        key={contact.id}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
