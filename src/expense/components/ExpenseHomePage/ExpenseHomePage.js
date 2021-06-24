import React, { useState } from 'react';
import Expenses from '../Expenses/Expenses'
import NewExpense from '../NewExpense/NewExpense'

const expenseList = [
  { 
    id: '1', 
    date: new Date(2021, 2, 28),
    title: 'Car Insurance',
    amount: 294.67
  },{ 
    id: '2', 
    date: new Date(2021, 5, 20),
    title: 'Desk (Wooden)',
    amount: 300.67
  },{ 
    id: '3', 
    date: new Date(2022, 3, 22),
    title: 'Vacuum (new model)',
    amount: 1000.67
  },{ 
    id: '4', 
    date: new Date(2021, 10, 15),
    title: 'Bike',
    amount: 700.67
  }
];

const ExpenseHomePage = () => {
  
  const [expenses, updateExpenses] = useState(expenseList);

  const addExpenseHandler = (data) => {
    // console.log(data)
    updateExpenses((prevState) => [
      ...prevState,
      {
        id: new Date().getMilliseconds(),
        ...data
      }
    ]);
  }

  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <Expenses items={expenses} />
      
    </div>
  )
}

export default ExpenseHomePage
