import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../../common/hooks/use-http';
import { addQuote } from '../lib/api';
import { COMPLETED_STATUS, PENDING_STATUS } from '../../common/hooks/http-statuses';

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === COMPLETED_STATUS) {
      history.push('/quotes')
    }
  }, [status])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData)
  }
  return (
    <QuoteForm isLoading={status === PENDING_STATUS} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote
