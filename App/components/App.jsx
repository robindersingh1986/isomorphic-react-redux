//Dumb Component

import React, { PropTypes } from 'react';
import { Route, IndexRoute, Link } from 'react-router'

export default class App extends React.Component {
  /*static propTypes = {
    children: PropTypes.object
  };*/

  render() {
    return (
      <div id="main-view">
      <header> 
          Links:
          {' '}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/foo">Foo</Link>
          {' '}
          <Link to="/bar">Bar</Link>
      </header>
      <div id="mainContent">
        <h1>Todos</h1>

        <hr />

        {this.props.children}
        </div>
        <footer>This is footer</footer>
      </div>
    );
  }
}
