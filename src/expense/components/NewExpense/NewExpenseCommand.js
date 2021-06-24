import React from 'react'
import './NewExpenseCommand.css'

const NewExpenseCommand = (props) => {
  return (
    <div className='new-expense-command'>
      <button onClick={props.onAddingNewCommand}>Add New Expense</button>
    </div>
  )
}

export default NewExpenseCommand
