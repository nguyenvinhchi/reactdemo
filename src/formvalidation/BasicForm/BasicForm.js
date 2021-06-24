import React from "react";
import useInput from "../hooks/use-hook";
import styles from "./BasicForm.css";

const validateName = (name) => name.trim() !== "";

const validateEmail = (email) => {
  return email.includes("@");
};

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputOnBlurHandler: nameOnBlurHandler,
    reset: resetNameInput,
  } = useInput(validateName);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputOnBlurHandler: emailOnBlurHandler,
    reset: resetEmailInput,
  } = useInput(validateEmail);

  const formIsValid = enteredEmailIsValid && enteredNameIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputStyle = !nameInputHasError
    ? styles["form-control"]
    : `${styles["form-control"]} ${styles["invalid"]}`;

  const emailInputStyle = !emailInputHasError
    ? styles["form-control"]
    : `${styles["form-control"]} ${styles["invalid"]}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["control-group"]}>
        <div className={nameInputStyle}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameOnBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className={styles["error-text"]}>Name must not be empty</p>
          )}
        </div>
        <div className={emailInputStyle}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailOnBlurHandler}
            value={enteredEmail}
          />

          {emailInputHasError && (
            <p className={styles["error-text"]}>Invalid email</p>
          )}
        </div>
        <div className={styles["form-actions"]}>
          <button type="submit" disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
