import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {
    log: {
        state: "null",
        data: null
    }
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
