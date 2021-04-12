import React from 'react'
import styles from './BuildControl.css'

const BuildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button 
                onClick={props.removed}
                className={styles.Less}
                disabled={props.disabled}>Less</button>
            <button 
                className={styles.More}
                onClick={props.added}>More</button>
        </div>
    )
}

export default BuildControl
