import styles from './Notification.css'
import React from 'react'

const Notification = (props) => {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = styles.error;
  }
  if (props.status === 'success') {
    specialClasses = styles.success;
  }

  const cssClasses = `${styles.notification} ${specialClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  )
}

export default Notification
