import React from "react";
import Counter from "./components/Counter";
import store from "./store/index";
import { Provider } from "react-redux";
import styles from "./index.css";

const Counter2HomePage = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Counter2HomePage;
