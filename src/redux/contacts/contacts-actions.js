/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const filterValue = createAction('contacts/filterValue');

export default { addContact, deleteContact, filterValue };
