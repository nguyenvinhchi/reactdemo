import styles from './HighlightedQuote.css'
import React from 'react'

const HighlightedQuote = (props) => {
  return (
    <div className={styles.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </div>
  )
}

export default HighlightedQuote
