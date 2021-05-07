import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import Card from "../ui/Card/Card";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, updateSelectedYear] = useState('ALL');

  const filterHandler = (year) => {
    updateSelectedYear(year)
  }  

  const yearList = getYearsCollection(props.items);
  const filteredExpenses = selectedYear === 'ALL' ? props.items : 
    props.items.filter(it => it.date.getFullYear().toString() === selectedYear);
  return (
    <Card className='expenses'>
      <ExpensesFilter years={yearList} onFilter={filterHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

function getYearsCollection(expenseList) {
  const yearSet = new Set(expenseList.map(it => it.date.getFullYear()));
  const yearList = ['ALL', ...yearSet];
  return yearList;
}

export default Expenses;


