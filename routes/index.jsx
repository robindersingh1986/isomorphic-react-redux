var router = require("express").Router();
var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");
var MainComponent = require("../Components/Component.jsx");
var App = require("../Components/App.jsx");
var ReactRouter = require("react-router");


router.get("*", function(request, response){
	//var props = {title:"Isomorphic Web App"};
//ReactDOMServer.renderToString(
var html = ReactDOMServer.renderToString(
	 		React.createElement(App)
	 	);
	 response.send(html);

/*	ReactRouter.match({
		routes: (
				<ReactRouter.Router history={ReactRouter.browserHistory}>
					<ReactRouter.Route path="/" component={require("../Components/Component.jsx")}>
					</ReactRouter.Route>
				</ReactRouter.Router>
			),
		location: request.url
	}, function(error, redirectLocation, renderProps){
			if(renderProps)
			{
				var html = ReactDOMServer.renderToString(
					<ReactRouter.RouterContext {...renderProps} />
				);
				response.send(html);
			}
			else
			{
				response.status(404).send("Not Found");
			}
	});
*/
	// var html = ReactDOMServer.renderToString(
	// 		React.createElement(MainComponent, props)
	// 	);
	// response.send(html);
});

module.exports = router;