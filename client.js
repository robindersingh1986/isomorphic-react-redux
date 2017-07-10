/*var React = require("react");
var ReactDOM = require("react-dom");
var MainComponent = require("./Components/Component.jsx");

var props = window.PROPS;

ReactDOM.render(
		React.createElement(MainComponent, props), document.getElementById("container")	
	);
*/
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from "./Reducers"
import App from "./Components/App.jsx";

//var MainComponent = require("./Components/Component.jsx");

const store = createStore(allReducers);

console.log("Client side rendering");

/*ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById("container"));*/


//React.createElement(MainComponent, props), document.getElementById("container")	