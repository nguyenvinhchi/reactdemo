import React from 'react'
import styles from './Person.css'

const Person = (props) => {
    return (
        <div className={styles.Person} onClick={props.clicked}>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Person
