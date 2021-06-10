import React from "react";
import store from "./store/index";
import { Provider } from "react-redux";
import styles from "./index.css";
import Home from "./components/Home";

const Counter2HomePage = () => {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default Counter2HomePage;
