import React, { useEffect } from "react";
import {
  COMPLETED_STATUS,
  PENDING_STATUS,
} from "../../common/hooks/http-statuses";
import useHttp from "../../common/hooks/use-http";
import Spinner from "../../common/UI/Spinner/Spinner";
import NoQuoteFound from "../components/quotes/NoQuoteFound";
import QuoteList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";

// const DUMMY_QUOTES = [
//   { id: "1", author: "Author 1", text: "Amazing Quote" },
//   { id: "2", author: "Author 2", text: "Interesting Quote" },
// ];
const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === PENDING_STATUS) return <Spinner />;

  if (error) return <p className="center focused">{error}</p>;

  if (
    status === COMPLETED_STATUS &&
    (!loadedQuotes || loadedQuotes.length === 0)
  )
    return <NoQuoteFound />;

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
