import React from 'react'
import styles from './CommentItem.css'

const CommentItem = (props) => {
  return (
    <li className={styles.item}>
      <p>{props.text}</p>
    </li>
  )
}

export default CommentItem
