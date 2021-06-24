import React from "react";
import styles from "./CommentList.css";
import CommentItem from './CommentItem'

const CommentList = (props) => {
  console.log(props.comments);
  return (
    <ul className={styles.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentList;
