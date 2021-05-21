import React from 'react'
import styles from './Button.css'

const Button = (props) => {
  console.log('Button run')
  return (
    <button className={`${styles.button} ${props.className}`} 
      disabled={props.disabled}
      onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default React.memo(Button)
