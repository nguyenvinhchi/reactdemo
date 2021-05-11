import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Button from "../UI/Button";
import styles from "./AddUser.css";

const AddUser = (props) => {
  const [usernameValue, setUsernameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      username: usernameValue.trim(),
      age: Number(ageValue),
    };

    if (data.username.length === 0) {
      setError({
        title: "Invalid username",
        message: "Please enter a valid username value (non empty)",
      });
      return;
    }
    if (data.age <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age value ( greater than 0)",
      });
      return;
    }

    props.onAddUser(data);
    setUsernameValue("");
    setAgeValue("");
  };

  const usernameChangeHandler = (event) => {
    setUsernameValue(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeValue(event.target.value);
  };

  const closeErrorModalHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} 
        onClose={closeErrorModalHandler}
        message={error.message} />}
      <Card className={styles["add-user"]}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={usernameValue}
              onChange={usernameChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={ageValue}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
