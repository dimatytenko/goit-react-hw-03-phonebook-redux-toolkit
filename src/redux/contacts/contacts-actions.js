import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: nanoid(),
  },
}));

const deleteContact = createAction('contacts/delete');
const filter = createAction('contacts/filter');

const actions = { addContact, deleteContact, filter };

export default actions;
