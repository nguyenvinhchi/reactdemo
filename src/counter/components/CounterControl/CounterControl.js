import React from 'react'
import styles from './CounterControl.css'

const CounterControl = (props) => {
    return (
        <div className={styles.CounterControl} onClick={props.clicked}>
            {props.label}
        </div>
    )
}

export default CounterControl
