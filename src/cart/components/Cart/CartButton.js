import styles from './CartButton.css'
import React from 'react'
import { useSelector } from 'react-redux'

const CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={styles.badge}>{totalQuantity}</span>
    </button>
  )
}

export default CartButton
