import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactListItem from './ContactListItem';

const ContactList = ({ filteredContacts }) => (
  <ul>
    {filteredContacts.map(({ name, number, id }) => (
      <ContactListItem name={name} number={number} id={id} key={id} />
    ))}
  </ul>
);

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  filteredContacts: filterContacts(items, filter),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
