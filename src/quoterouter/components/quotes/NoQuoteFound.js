import styles from './NoQuoteFound.css'
import React from 'react'
import { Link } from 'react-router-dom'

const NoQuoteFound = () => {
  return (
    <div className={styles.noquotes}>
      <p>No quotes found!</p>
      <Link className='btn' to='/new-quote'>
        Add a Quote
      </Link>
    </div>
  )
}

export default NoQuoteFound
