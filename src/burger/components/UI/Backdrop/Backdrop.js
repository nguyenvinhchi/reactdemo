import React from 'react'
import styles from './Backdrops.css'

const Backdrop = (props) => (
    props.show ? <div 
        onClick={props.clicked}
        className={styles.Backdrop}></div> : null
)

export default Backdrop
