import React                from 'react';
import { render }           from 'react-dom';
import { Router }           from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider }         from 'react-redux';
import allReducers        from './App/reducers';
import routes               from './routes/index.jsx';
/*import promiseMiddleware    from './lib/promiseMiddleware'; */
//import immutifyState        from './lib/immutifyState';
import { createStore,
         combineReducers,
         applyMiddleware }  from 'redux';

//const initialState = immutifyState(window.__INITIAL_STATE__);

const history = createBrowserHistory();

//const reducer = combineReducers(reducers);
//const store   = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState);
const store = createStore(allReducers, applyMiddleware(logger));

render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);
