import React, { Fragment, useEffect, useState } from 'react'
import Home from './Home/Home';
import Login from './Login/Login';
import MainHeader from './MainHeader/MainHeader'
import AuthContext from './store/auth-context';

const LoginHomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  return (
    <Fragment>
      <AuthContext.Provider 
        value={{
          isLoggedIn: isLoggedIn, 
          onLogout: logoutHandler
          }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
      
    </Fragment>
  )
}

export default LoginHomePage
