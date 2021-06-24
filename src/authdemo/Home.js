import React from 'react'
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import { useSelector } from "react-redux";

const Home = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const isLogined = !!accessToken;

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {!isLogined && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        <Route path="/profile">
          {isLogined && <ProfilePage />}
          {!isLogined && <Redirect to="/auth" />}
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Home;
