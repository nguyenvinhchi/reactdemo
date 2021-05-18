import React, { useState } from 'react'
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput'
import styles from './Course2Home.css'

const Courses2HomePage = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: new Date().getMilliseconds().toString()});
      return updatedGoals;
    })
  }

  const deleteItemHandler = (goalId) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    })
  }

  let content = (
    <p style={{ textAlign: 'center'}}>No goals found. Maybe add one?</p>
  );
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section className={styles["goal-form"]}>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section className={styles.goals}>
        {content}
      </section>
      
    </div>
  )
}

export default Courses2HomePage