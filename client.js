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
import {createStore} from "redux";
import {allReducers} from "./Reducers"

var MainComponent = require("./Components/Component.jsx");

const store = createStore(allReducers);

var props = window.PROPS;

ReactDOM.render(
		React.createElement(MainComponent, props), document.getElementById("container")	
	);
