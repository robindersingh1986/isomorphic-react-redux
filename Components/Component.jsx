var React = require("react");
var CreateReactClass = require("create-react-class");


module.exports = CreateReactClass({
	render: function(){
		return (
			<html>
			<head>
			<title>Title</title>
			<link rel="stylesheet" href="/style.css" />
			</head>
			<body>
				<div>
					<p>Loreum Ipsum Dolor Loreum Ipsum Dolor Loreum Ipsum Dolor</p>
				</div>
				<script src="./bundle.js" />
			</body>
			</html>
			)
	}
});