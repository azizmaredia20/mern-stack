import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import Home from '../Home';

const Main  = (props) => (
    <BrowserRouter basename="/">
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Main;