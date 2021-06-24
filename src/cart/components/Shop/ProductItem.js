import React from 'react';
import styles from './ProductItem.css'
import Card from '../../../common/UI/Card/Card'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const {productId, productName, price, description } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({productId, productName, price }))
  }
  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{productName}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
