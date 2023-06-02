import { useContacts } from 'hooks/useContacts';
import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contactsSelectors';
import { Contacts } from './ContactList.styled';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const { deleteContact } = useContacts();
  const contacts = useSelector(getVisibleContacts);
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => deleteContact(id)}
        />
      ))}
    </Contacts>
  );
};

export default ContactList;
