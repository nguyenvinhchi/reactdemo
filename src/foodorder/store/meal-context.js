import React from 'react'

const MealContext = React.createContext({
  mealList: [],
  loading: false
});

export default MealContext;
