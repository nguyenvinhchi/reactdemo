import React from 'react'
import styles from './Button.css'

const Button = (props) => {
  return (
    <button className={styles.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button
