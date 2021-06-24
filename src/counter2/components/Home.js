import React from 'react'
import { useSelector } from 'react-redux';
import Counter from "./Counter";
import Header from './Header'
import Auth from './Auth'

const Home = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <div>
      <Header />
      {!isAuth && <Auth />}
      <Counter />
    </div>
  )
}

export default Home
