require("babel-register")({
	presets:["react"]
});

import express from "express";
let app = express();
app.use(express.static("public"));
app.use(require("./routes/index.jsx"));



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