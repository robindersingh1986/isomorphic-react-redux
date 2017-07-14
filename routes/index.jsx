import React                   from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import AppComponent            from '../App/components/App.jsx';
import Home                    from '../App/containers/App.jsx';

/*export default (
  <Route name="app" component={AppComponent} path="/">
      <IndexRoute component={Home}/>
  </Route>
);*/



/*const App = ({ children }) => (
  <div>
    <header>
      Links:
      {' '}
      <Link to="/">Home</Link>
      {' '}
      <Link to="/foo">Foo</Link>
      {' '}
      <Link to="/bar">Bar</Link>
    </header>
    {children}
  </div>
)*/

const Foo = () => (<div>Foo!</div>)
const Bar = () => (<div>Bar!</div>)

const routes = (
  <Route path="/" component={AppComponent} name="app">
    <IndexRoute component={Home}/>
    <Route path="foo" component={Foo}/>
    <Route path="bar" component={Bar}/>
  </Route>
)

export default routes
