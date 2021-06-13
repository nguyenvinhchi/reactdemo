import React from 'react'
import styles from './MainHeader.css'
import CartButton from '../Cart/CartButton'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/index'

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const cartToggleHandler = () => {
    console.log("toggle")
    dispatch(uiActions.toggle());
  }
  return (
    <header className={styles.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={cartToggleHandler} />
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default MainHeader
