import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout/Layout';
import TestReactRouter from '../components/TestReactRouter/TestReactRouter';
import TestReactRouterRedirect from '../components/TestReactRouterRedirect/TestReactRouterRedirect';
import RouterHappenContainer from '../containers/RouterHappenContainer';

export default (
  <Layout>
    <Switch>
      <Route
        path="/"
        component={RouterHappenContainer}
        exact
      />
      <Route
        path="/react-router"
        component={TestReactRouter}
        exact
      />
      <Route
        path="/react-router/redirect"
        component={TestReactRouterRedirect}
      />
    </Switch>
  </Layout>
);
