import React, { useCallback, useEffect, useState } from 'react'
import styles from './Comments.css'
import NewComment from './NewComment'
import CommentList from './CommentList'
import { useParams } from 'react-router'
import useHttp from '../../../common/hooks/use-http'
import { getAllComments } from '../../lib/api'
import { COMPLETED_STATUS, PENDING_STATUS } from '../../../common/hooks/http-statuses'
import Spinner from '../../../common/UI/Spinner/Spinner'

const Comments = () => {
  const { quoteId } = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {sendRequest, data: loadedComments, error, status} = useHttp(getAllComments, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  }

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId]);

  let comments = null;
  if (status === PENDING_STATUS) { comments = <Spinner /> }
  if (error) { comments = <p>{error}</p> }
  if (status === COMPLETED_STATUS && loadedComments && loadedComments.length > 0) {
    comments = <CommentList comments={loadedComments} />
  }

  if (status === COMPLETED_STATUS && loadedComments && loadedComments.length === 0) {
    comments = <p>No comments were added yet!</p>
  }

  return (
    <div className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewComment quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </div>
  )
}

export default Comments
