import React from 'react';
import App from './App';
import Main from './mainsection';
import {Route} from 'react-router';

export default (
    <Route component={App}>
        <Route path='/' component={Main}/>
    </Route>
);