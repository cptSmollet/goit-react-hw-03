import React from 'react';
import { Field } from 'formik';
import styles from "./SearchBox.module.css"


function SearchBox({ value, setFilter }) {
    return (
        <div>
            <label className={styles.label}>
            <span>Find contacts by name</span>
            <input className={styles.input} type="text" value={value} onChange={(e) => setFilter(e.target.value) } />
            </label>
        </div>
    );
}

export default SearchBox;