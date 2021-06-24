import React from 'react'
import styles from './Product.css'
import ProductItem from './ProductItem'

const products = [
  {productId: 'test1', productName: 'Product Test 1', price: 6, description: 'Amazing Product Test 1' },
  {productId: 'test2', productName: 'Product Test 2', price: 8, description: 'Amazing Product Test 2' }
]
const Product = (props) => {

  const productItems = products.map(it => {
    return <ProductItem
      key={it.productId}
      productId={it.productId}
      productName={it.productName}
      price={it.price}
      description={it.description} />
  })
  return (
    <div className={styles.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { productItems }
      </ul>
    </div>
  )
}

export default Product
