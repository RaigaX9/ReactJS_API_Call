import {combineReducers} from 'redux';
import repoReducer from './restcall';

var x = combineReducers({
    repo: repoReducer
});

export default x;