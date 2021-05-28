import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  onInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitAddContact = event => {
    event.preventDefault();

    this.props.addNewContact(this.state);
    this.clearForm();
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

export default ContactForm;
