import styles from './CartItem.css'

import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { productId, productName, quantity, price } = props.item;
  const total = quantity * price;

  const addItemToCartHandler = () => {
    dispatch(cartActions.addItemToCart({productId, productName, quantity, price}))
  }

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart({productId, productName, quantity, price}))
  }

  return (
    <li className={styles.item}>
      <header>
        <h3>{productName}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{' '}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
