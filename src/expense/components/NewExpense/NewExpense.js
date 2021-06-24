import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import NewExpenseCommand from './NewExpenseCommand';

const NewExpense = (props) => {
  const [addingNew, setAddingNew] = useState(false);

  const addingNewCommandHandler = () => {
    setAddingNew(true);
  }
  const addingNewCommandCancelHandler = () => {
    setAddingNew(false);
  }
  const addNewExpense = addingNew ? 
    <ExpenseForm 
      onAddExpense={props.onAddExpense} 
      onAddingNewCommandCancel={addingNewCommandCancelHandler} /> 
    : <NewExpenseCommand onAddingNewCommand={addingNewCommandHandler} />
  return (
    <div className='new-expense'>
      {addNewExpense}
    </div>
  )
}

export default NewExpense
