import React, { useContext } from 'react'
import CartContext from '../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.css'
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  }

  const cartItems = <ul className={styles["cart-items"]}>
    {cartCtx.items
    .map(it => <CartItem key={it.id} name={it.name} amount={it.amount} price={it.price}
                onRemove={cartItemRemoveHandler.bind(null, it.id)}
                onAdd={cartItemAddHandler.bind(null, it)} />)}
    </ul>;
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose} >Close</button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
