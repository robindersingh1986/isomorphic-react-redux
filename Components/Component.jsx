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
				<div id="container">
					<p>Loreum Ipsum Dolor Loreum Ipsum Dolor Loreum Ipsum Dolor</p>
				</div>
				<script type="javascript" src="/bundle.js" />
			</body>
			</html>
			)
	}
});