import React from "react";
import Card from "../UI/Card";
import styles from "./Users.css";

const Users = (props) => {
  const users = props.items.map((it) => {
    return <li key={it.username}>{`${it.username} (${it.age} years old)`}</li>;
  });

  return (
    <Card className={styles.users}>
      <ul>
        {users}
      </ul>
    </Card>
  );
};

export default Users;
