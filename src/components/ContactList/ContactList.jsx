import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContacts }) => {
    console.log('Contacts:', contacts);
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContacts={deleteContacts}
        />
      ))}
    </ul>
  );
};

export default ContactList;