import styles from "./MainNavigation.css";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const MainNavigation = () => {
  const {accessToken} = useSelector((state) => state.auth);
  const isLogined = !!accessToken;

  const history = useHistory();
  const dispatch = useDispatch();

  const loginHandler = () => {
    if (isLogined) {
      console.log('Logout clicked')
      dispatch(authActions.logout());
    } else {
      history.push("/auth");      
      console.log('Login clicked')
    }
  };
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>Auth Demo</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLogined && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          <li>
            <button onClick={loginHandler}>
              {isLogined ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
