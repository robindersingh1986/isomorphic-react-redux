//Smart component

import React, {Component}  from "react";
import {bindActionCreators}  from "redux";
import {connect}  from "react-redux";
import {todoAct} from "../actions/todoAction"; 


class App extends Component {
	showData() {
		this.props.todo.map((item) => {
				return (
						<li key={item}>{item}</li>
					)
			})
	}
	render() {
				return (
						<ul>
							{this.showData()}
							<li>one</li>
							<li>two</li>
						</ul>
						);
		}
}




function mapStateToProps(state){
	return {
		todo:state.todo
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({todoAct:todoAct}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);