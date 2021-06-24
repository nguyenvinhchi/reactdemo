import React, { useState } from "react";
import AddUser from "./AddUser/AddUser";
import Users from "./Users/Users";
import styles from "./UsersHomePage.css";

const UsersHomePage = () => {
  const [users, setUsers] = useState([{ username: "admin", age: 30 }]);

  const addUserHandler = (userData) => {
    setUsers((prev) => {
      return [...prev, userData];
    });
  };

  return (
    <div className={styles.body}>
      <div className={styles["users-home-page"]}>
        <AddUser onAddUser={addUserHandler} />
        <Users items={users} />
      </div>
    </div>
  );
};

export default UsersHomePage;
