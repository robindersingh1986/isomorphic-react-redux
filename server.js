require("babel-register")({
	presets:["react"]
});

/*import express from "express";
import React from "react";  
import Router from "react-router"; 
import { Route } from "react-router";  

*/

import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from './routes';
import { Provider }              from 'react-redux';
import * as reducers             from 'reducers';
import promiseMiddleware         from 'lib/promiseMiddleware';
import fetchComponentData        from 'lib/fetchComponentData';
import { createStore,
         combineReducers,
         applyMiddleware }       from 'redux';
import path                      from 'path';



const app = express();
app.use(express.static("public"));
//app.use(require("./routes/index.jsx"));

var App = require("./Components/App.jsx");


app.get("*", function(request, response){

	Router.run( <Route handler={ App } path="/" />, request.url, App => {
    
	var html = ReactDOMServer.renderToString(
	 		React.createElement(App)
	 	);
	 response.send(html);
    /*let content = React.renderToString(<Handler />);
    res.render('index', { content: content });*/
  });

	console.log("Server side rendering , route url called : ", request.url);
});

/*var React = require("react");
var ReactDOMServer = require("react-dom/server");
var MainComponent = require("./Components/Component.jsx");

app.get("/", function(request, response){
	var props = {title:"Isomorphic Web App"}
	var html = ReactDOMServer.renderToString(
			React.createElement(MainComponent, props)
		);
	response.send(html);
});*/

const PORT = 3300;
app.listen(PORT, function(err){
	if(!err) { console.log("Sever is up"); }
	else { console.log("Error : ", err); }
})