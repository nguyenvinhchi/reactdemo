import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import NoQuoteFound from "./components/quotes/NoQuoteFound";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

const Home = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote" exact>
          <NewQuote />
        </Route>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="*">
          <NoQuoteFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Home;
