import styles from './Auth.css'

import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
  
    event.preventDefault();
    console.log(event.target.email.value);
    dispatch(authActions.login({
      username: event.target.email.value,
      password: event.target.password.value
    }))
  }
  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={styles.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={styles.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
