import React from 'react'
import styles from './MainHeader.css'
import Navigation from './Navigation'

const MainHeader = (props) => {
  return (
    <header className={styles['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  )
}

export default MainHeader
