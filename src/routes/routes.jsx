import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';

function routes() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default routes;
