import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Counter.css'

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const increateByHandler = () => {
    dispatch({ type: 'increase_by', amount: 10 })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  }

  return (
    <main className={StyleSheet.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={styles.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increateByHandler}>Increase By 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}

export default Counter
