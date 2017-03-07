import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import {Router, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import x from './retrieverepo';
import routes from './getrouters'

var storesection = applyMiddleware(promise)(createStore);
render(
    <Provider store={storesection(x)}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>, document.getElementById('root')
);