import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css"


function Contact({ name, number, deleteContacts, id }) {
    console.log('Contact Props:', { name, number, deleteContacts, id });
    return (
        <li>
            <div className={styles.Person}>
<div>
            <div className={styles.Username}>
                <FaUser size="20" />
                <p>{name}</p>
            </div>
            <div className={styles.Phone}>
                <FaPhoneAlt size="20" />  
                <p>{number}</p>    
            </div>
</div>

                <button type="button" onClick={() => deleteContacts(id)}>
                Delete
                </button>    
        </div>
        </li>
    )
}

export default Contact;