import styles from './QuoteForm.css'
import React, { Fragment, useRef, useState } from 'react'
import Card from '../../../common/UI/Card/Card';
import Spinner from '../../../common/UI/Spinner/Spinner';
import { Prompt } from 'react-router';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({
      author: enteredAuthor,
      text: enteredText
    })
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  }

  const finishedEnterDataHandler = () => {
    setIsEntering(false);
  }
  
  return (
    <Fragment>
      <Prompt when={isEntering} message={(location) => 'Are you sure you want to leave? All entered data will be lost!'} />
      <Card>
      <form className={styles.form} onSubmit={submitFormHandler} onFocus={formFocusedHandler}>
        {props.isLoading && (
          <Spinner />
        )}

        <div className={styles.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor='text'>Text</label>
          <textarea row='5' id='text' ref={textInputRef} />
        </div>

        <div className={styles.actions}>
          <button className='btn' onClick={finishedEnterDataHandler}>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  )
}

export default QuoteForm
