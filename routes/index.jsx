import React                   from 'react';
import { Route, IndexRoute }   from 'react-router';
import AppComponent            from '../App/components/App.jsx';
import Home                    from '../App/containers/App.jsx';

export default (
  <Route name="app" component={AppComponent} path="/">
      <IndexRoute component={Home}/>
  </Route>
);
