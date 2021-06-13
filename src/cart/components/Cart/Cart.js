import styles from './Cart.css'
import React from 'react'
import Card from '../../../common/UI/Card/Card'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items)

  const items = cartItems.map(it => {
    return <CartItem item={it} key={it.productId} />
  })
  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items}

      </ul>
    </Card>
  )
}

export default Cart
