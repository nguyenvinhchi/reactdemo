import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_STATUS_PENDING } from "../../store/api/apiConstants";
import { profileActions } from "../../store/profile";
import styles from "./ProfileForm.css";
import Spinner from "../../../common/UI/Spinner/Spinner";
import { useHistory } from "react-router";

const ProfileForm = () => {
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const { status, error, isChangePasswordSuccess } = useSelector((state) => state.profile);
  const { accessToken } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setMessage(error);
    } 
    
    if (isChangePasswordSuccess) {
      history.push("/auth")
    }

  }, [error, isChangePasswordSuccess]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredPassword = passwordRef.current.value;
    console.log("entered pass:", enteredPassword);
    if (!enteredPassword || enteredPassword.length < 6) {
      setMessage("Please enter a password >= 6 characters");
      return;
    }

    dispatch(
      profileActions.changePasswordAttempt({
        newPassword: enteredPassword,
        accessToken,
      })
    );
  };

  if (status === API_STATUS_PENDING) return <Spinner />;

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordRef} />
        <div>{!!message && <p className={styles.error}>{message}</p>}</div>
      </div>

      <div className={styles.actions}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
