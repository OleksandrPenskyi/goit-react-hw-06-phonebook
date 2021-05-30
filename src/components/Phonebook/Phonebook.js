import React from 'react';
import PropTypes from 'prop-types';

import styles from './Phonebook.module.css';

const Phonebook = ({ title, children }) => (
  <section className={styles.Wrapper}>
    <h1>{title}</h1>
    {children}
  </section>
);

export default Phonebook;

Phonebook.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
