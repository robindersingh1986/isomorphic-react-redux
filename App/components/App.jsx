//Dumb Component

/*import React  from "react";


const App = () => (
		<div>
			<h2>App</h2>
		</div>
	)*/



import React, { PropTypes } from 'react';

export default class App extends React.Component {
  /*static propTypes = {
    children: PropTypes.object
  };*/

  render() {
    return (
      <div id="main-view">
        <h1>Todos</h1>

        <hr />

        {this.props.children}
      </div>
    );
  }
}
