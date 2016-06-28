import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Link,Router,Route,IndexRoute,browserHistory,IndexRedirect } from 'react-router';

import { Provider } from 'react-redux';
import store, {history} from './store';


import Login from './components/Login';

const router = (
	<Provider store={store}>
	    <Router history={history}>
	        <Route path="/" component={App}>
				<Route path="user">
					<IndexRedirect to="login"></IndexRedirect>
					<Route path="login" component={Login}></Route>
				</Route>
	        </Route>
			
	    </Router>
	</Provider>
);

render(router,document.getElementById('root'));
