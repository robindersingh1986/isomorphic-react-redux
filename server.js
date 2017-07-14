require("babel-register")({
	presets:["react"]
});

import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import routes                    from './routes/index.jsx';
import { Provider }              from 'react-redux';
import { RouterContext, match, Router, Route, browserHistory, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
 
import { createStore,
         combineReducers,
         applyMiddleware }       from 'redux';
import path                      from 'path';
import fetchComponentData        from './fetchComponentData';
import promiseMiddleware        from './promiseMiddleware';
import App from "./App/containers/App";
import { configureStore } from './App/store'

const app = express();
app.use(express.static("public"));

const PORT = process.env.PORT || 3300;
app.listen(PORT, function(err){
	if(!err) { console.log("Sever is up"); }
	else { console.log("Error : ", err); }
});


// function logger({ getState }) {
//   return next => action => {
//     console.log('will dispatch', action)

//     // Call the next dispatch method in the middleware chain.
//     let returnValue = next(action)

//     console.log('state after dispatch', getState())

//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue
//   }
// }



app.use( (req, res) => {
  //const location = createLocation(req.url);
  ////const location = req.url; //history.getCurrentLocation()
  //  const reducer  = combineReducers(reducers);
  ////const store    = applyMiddleware(promiseMiddleware)(createStore)(allReducers);
  //const store = createStore(allReducers, applyMiddleware(logger));
//const store = createStore(allReducers);

////const history = syncHistoryWithStore(browserHistory, store)


  const memoryHistory = createMemoryHistory(req.url)
  const store = configureStore(memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)



  match({ history, routes, location: req.url }, (err, redirectLocation, renderProps) => {
    //console.log(" renderProps : ", renderProps);
    if(err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if(!renderProps)
      return res.status(404).end('Not found');

    function renderView() {
      console.log("renderView called");
      
      const InitialView = (
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      );

      const componentHTML = renderToString(InitialView);

      const initialState = store.getState();

      const HTML = `
      <!DOCTYPE html>
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
     fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(renderView)
      .then(html => res.end(html))
      .catch(err => res.end(err.message));

  });
});


