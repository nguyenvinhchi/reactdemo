import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router";
import QuoteItem from "./QuoteItem";
import styles from "./QuoteList.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    }
    return quoteA.id < quoteB.id ? 1 : -1;
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAsc = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);
  const items = sortedQuotes.map((q) => (
    <QuoteItem key={q.id} id={q.id} text={q.text} author={q.author} />
  ));

  const changeSortHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAsc ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={styles.sorting}>
        <button onClick={changeSortHandler}>
          Sort {isSortingAsc ? "Dsc" : "Asc"}
        </button>
      </div>
      <ul className={styles.list}>{items}</ul>
    </Fragment>
  );
};

export default QuoteList;
