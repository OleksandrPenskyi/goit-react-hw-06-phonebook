import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    addNewContact: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  onInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitAddContact = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    // проверка на повтор имени в контактах
    if (this.isRepeatedName(name)) {
      alert(`${name} is already in contacts.`);
      this.clearForm();
      return;
    }

    this.props.addNewContact(newContact);
    this.clearForm();
  };

  isRepeatedName = name => {
    return this.props.contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());
  };

  clearForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const randomIdForName = uuidv4();
    const randomIdForNumber = uuidv4();

    const { name, number } = this.state;

    return (
      <form onSubmit={this.onSubmitAddContact} className={styles.Form}>
        <label className={styles.Label} htmlFor={randomIdForName}>
          Name
        </label>
        <input
          onChange={this.onInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={styles.Input}
          id={randomIdForName}
        />

        <label className={styles.Label} htmlFor={randomIdForNumber}>
          Number
        </label>
        <input
          onChange={this.onInputChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={styles.Input}
          id={randomIdForNumber}
        />

        <button type="submit" className={styles.Btn}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addNewContact: newContact => dispatch(actions.addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
