import 'babel-polyfill'
import React                from 'react';
import { render }           from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider }         from 'react-redux';

import {configureStore} from './App/store'
import routes               from './routes/index.jsx';

const store = configureStore(browserHistory, window.__initialState__)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('react-view')
)
