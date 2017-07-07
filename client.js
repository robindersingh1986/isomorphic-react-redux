var React = require("react");
var ReactDOM = require("react-dom");
var MainComponent = require("./Components/Component.jsx");


ReactDOM.render(
		React.createElement((MainComponent), document.getElementById("container"))
	);
