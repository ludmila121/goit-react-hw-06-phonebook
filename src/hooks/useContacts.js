import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSelectors';
import { addItem, deleteItem, setFilter } from 'redux/contactsSlice';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const setContact = contact => dispatch(addItem(contact));
  const deleteContact = contactId => dispatch(deleteItem(contactId));
  const changeFilter = value => dispatch(setFilter(value));

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const currentName = name.toLowerCase();
    const matchName = contacts.some(
      ({ name }) => name.toLowerCase() === currentName
    );
    matchName ? alert(`${name} is already in contacts`) : setContact(contact);
  };
  return {
    addContact,
    deleteContact,
    changeFilter,
  };
};
