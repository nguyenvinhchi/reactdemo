import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

  const changeHandler = (event) => {
    console.log(event.target.value)
    props.onFilter(event.target.value)
  }
  const options = props.years.map(it => <option key={it}>{it}</option>)
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control' >
        <label>Filter By Year</label>
        <select onChange={changeHandler}>
          {options}
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
