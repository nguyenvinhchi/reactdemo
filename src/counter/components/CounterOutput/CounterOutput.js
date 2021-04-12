import React from 'react'
import styles from './CounterOutput.css'

const CounterOutput = (props) => {
    return (
        <div className={styles.CounterOutput}>
            Current Counter: {props.value}
        </div>
    )
}

export default CounterOutput
