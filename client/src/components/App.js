import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Route, Switch } from "react-router-dom";
import ProductIndex from "./products/ProductIndex";
import Login from "./Login";
import Register from "./Register";
import AuthRoute from "./AuthRoute";
import Nav from "./Nav";
import ProductDetail from "./products/ProductDetail";

const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Nav />
      <Switch>
        <AuthRoute
          exact
          path="/register"
          component={Register}
          routeType="auth"
        />
        <AuthRoute exact path="/login" component={Login} routeType="auth" />

        {/* <Route path="/" component={ProductIndex} /> */}
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  );
};

export default App;
