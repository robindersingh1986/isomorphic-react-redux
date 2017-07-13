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
import { RouterContext, match } from 'react-router';
//import createHistory          from 'history/createBrowserHistory';
import routes                    from './routes/index.jsx';

import { Provider }              from 'react-redux';
import allReducers             from './App/reducers/';

import { createStore,
         combineReducers,
         applyMiddleware }       from 'redux';
import path                      from 'path';

import App from "./App/containers/App";
//const history = createHistory()


const app = express();
app.use(express.static("public"));

const PORT = process.env.PORT || 3300;
app.listen(PORT, function(err){
	if(!err) { console.log("Sever is up"); }
	else { console.log("Error : ", err); }
});


function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}



app.use( (req, res) => {
  //const location = createLocation(req.url);
  const location = req.url; //history.getCurrentLocation()
  //  const reducer  = combineReducers(reducers);
  //  const store    = applyMiddleware(promiseMiddleware)(createStore)(reducers);
  const store = createStore(allReducers, applyMiddleware(logger));

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    console.log(" renderProps : ", renderProps);
    if(err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if(!renderProps)
      return res.status(404).end('Not found');

    function renderView() {
      const InitialView = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      const componentHTML = renderToString(InitialView);

      const initialState = store.getState();

      const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Redux Demo</title>

          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>
        </head>
        <body>
          <div id="react-view">${componentHTML}</div>
          <script type="application/javascript" src="/bundle.js"></script>
        </body>
      </html>
      `;

      return HTML;
    }
  });
});


