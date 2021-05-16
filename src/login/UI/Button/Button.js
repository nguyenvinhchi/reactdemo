import React from 'react'
import styles from './Button.css'

const Button = (props) => {
  return (
    <button type={props.type || 'button'}
      disabled={props.disabled}
      className={`${styles.button} ${props.className}`}
      >{props.children}</button>
  )
}

export default Button
