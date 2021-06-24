import styles from "./AuthForm.css";
import React, { useEffect, useRef, useState } from "react";
import Spinner from "../../../common/UI/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import { useHistory } from "react-router";

const AuthForm = () => {
  const {accessToken, status: authStatus, error }= useSelector((state) => state.auth);
  const isAuthenticated = !!accessToken;
  
  const [isSignup, setIsSignup] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);

  const switchAuthModeHandler = () => {
    setIsSignup((prevState) => !prevState);
    dispatch(authActions.reset());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (isSignup) {
      if (
        !enteredEmail ||
        !enteredEmail.includes("@") ||
        !enteredPassword ||
        enteredPassword.length < 6
      ) {
        console.log("Invalid email or password");
        return;
      }
    }
    dispatch(
      authActions.authAttempt({
        data: {
          email: enteredEmail,
          password: enteredPassword,
        },
        isSignup,
      })
    );
  };

  if (authStatus === "PENDING") return <Spinner />;

  return (
    <section className={styles.auth}>
      <h1>{!isSignup ? "Login" : "Sign Up"}</h1>

      <form onSubmit={formSubmitHandler}>
        <div className={styles.error}>{error && <p>{error}</p>}</div>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="password">Your password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>

        <div className={styles.actions}>
          <button>{!isSignup ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {!isSignup ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
