import React, { useState } from 'react'
import Button from '../../UI/Button/Button'
import styles from './CouresInput.css'

const CourseInput = (props) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setEnteredValue(event.target.value.trim());
    setIsValid(true);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (isValid) {
      props.onAddGoal(enteredValue);
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" 
          onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  )
}

export default CourseInput
