import React from 'react';
import Phonebook from './components/Phonebook';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const App = () => (
  <Phonebook title={'Phonebook'}>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </Phonebook>
);

export default App;
