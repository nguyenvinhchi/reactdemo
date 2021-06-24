import styles from "./UserProfile.css";
import React from "react";
import ProfileForm from "./ProfileForm";

const UserProfile = () => {

  return (
    <section className={styles.profile}>
      <h1>Your profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
