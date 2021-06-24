import React, { useEffect } from 'react'
import { Fragment } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { COMPLETED_STATUS, PENDING_STATUS } from '../../common/hooks/http-statuses';
import useHttp from '../../common/hooks/use-http';
import Spinner from '../../common/UI/Spinner/Spinner';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NoQuoteFound from '../components/quotes/NoQuoteFound'
import { getQuote } from '../lib/api';

const QuoteDetail = () => {
  const params = useParams();
  const routeMatch = useRouteMatch();
  const { sendRequest, data: loadedQuote, error, status } = useHttp(getQuote, true);
  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])

  if (status === PENDING_STATUS) return <Spinner />
  if (error) {
    return <p>{error}</p>
  }
  if (status === COMPLETED_STATUS && !loadedQuote) {
    return <NoQuoteFound />
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} id={loadedQuote.id} author={loadedQuote.author} />
      <Route path={`${routeMatch.path}`} exact>
        <div className="centered">
          <Link className="btn-flat" to={`${routeMatch.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail
