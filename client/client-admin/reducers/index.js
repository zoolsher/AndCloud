import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // we need this for react-router
import log from './log';

// Combine all our reducers togeher
const rootReducer = combineReducers({ log, routing: routerReducer });

export default rootReducer;