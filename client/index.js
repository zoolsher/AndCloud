import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Link,Router,Route,IndexRoute,browserHistory,IndexRedirect } from 'react-router';
import NoMatch from './components/NoMatch';
import { Provider } from 'react-redux';
import store, {history} from './store';
import RightPanel from './components/RightPanel';
import NoAppSelect from './components/NoAppSelect';
import Login from './components/Login';

const router = (
	<Provider store={store}>
	    <Router history={history}>
	        <Route path="/">
				<IndexRedirect to="page/1"></IndexRedirect>
				<Route path="page/:page" component={App}>
					<IndexRoute component={NoAppSelect}></IndexRoute>
					<Route path="app/:appid" component={RightPanel}></Route>
				</Route>
				<Route path="user" component={App}>
					<IndexRedirect to="login"></IndexRedirect>
					<Route path="login" component={Login}></Route>
				</Route>
	        </Route>
			<Route path="*" component={NoMatch}></Route>
	    </Router>
	</Provider>
);

render(router,document.getElementById('root'));
