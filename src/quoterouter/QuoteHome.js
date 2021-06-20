import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

const QuoteHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

export default QuoteHome
