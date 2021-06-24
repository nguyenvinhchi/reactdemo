import styles from './NewComment.css'
import React, { useEffect, useRef } from 'react'
import useHttp from '../../../common/hooks/use-http'
import { addComment } from '../../lib/api';
import { COMPLETED_STATUS, PENDING_STATUS } from '../../../common/hooks/http-statuses';
import Spinner from '../../../common/UI/Spinner/Spinner';

const NewComment = (props) => {

  const commentRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);
  const { onAddedComment } = props;

  useEffect(() => {
    if (status === COMPLETED_STATUS && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment])

  const submitFormHandler = (event) => {
    event.preventDefault();
    
    const requestData = {
      quoteId: props.quoteId,
      commentData: commentRef.current.value
    }
    sendRequest(requestData);
  }

  if (status === PENDING_STATUS) return <Spinner />

  if (error) return <p>{error}</p>

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles.control}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  )
}

export default NewComment
