import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "../store";
import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";
import Product from "./Shop/Product";
import Notification from './Cart/Notification'

let isInitial = true;

const Home = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isCartShow = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [])
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart]);

  return (
    <Fragment>
      {notification && <Notification 
        status={notification.status}
        title={notification.title}
        message={notification.message} />}
      <Layout>
        {isCartShow && <Cart />}
        <Product />
      </Layout>
    </Fragment>
  );
};

export default Home;
