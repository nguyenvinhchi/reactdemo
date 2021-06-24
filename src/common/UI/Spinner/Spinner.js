import styles from './Spinner.css'
import React from 'react'

const Spinner = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} />
    </div>
  )
}

export default Spinner
