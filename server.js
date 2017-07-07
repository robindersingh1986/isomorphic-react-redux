require("babel-register")({
	presets:["react"]
});

var express = require("express");
var app = express();

var React = require("react");
var ReactDOMServer = require("react-dom/server");
var MainComponent = require("./Components/Component.jsx");


app.use(express.static("public"));

app.get("/", function(request, response){
	var html = ReactDOMServer.renderToString(
			React.createElement(MainComponent)
		);
	response.send(html);
});

var PORT = 3300;
app.listen(PORT, function(err){
	if(!err) { console.log("Sever is up"); }
	else { console.log("Error : ", err); }
})