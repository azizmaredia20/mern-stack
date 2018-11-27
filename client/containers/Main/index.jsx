import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Profile from '../Profile';

const Main = (props) => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
    </Switch>
);

export default Main;