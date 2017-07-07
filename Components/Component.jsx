var React = require("react");
var CreateReactClass = require("create-react-class");


module.exports = CreateReactClass({
	_handleClick: function(){
		alert("_handleClick called");
	},
	render: function(){
		return (
			<html>
			<head>
			<title>Title</title>
			<link rel="stylesheet" href="/style.css" />
			</head>
			<body>
			<h1>{this.props.title}</h1>
				<div id="container">
					<button onClick={this._handleClick}> X </button>
					<p>Loreum Ipsum Dolor Loreum Ipsum Dolor Loreum Ipsum Dolor</p>
				</div>
				<script dangerouslySetInnerHTML={{
					__html : 'window.PROPS=' + JSON.stringify(this.props)
				}} />
				<script type="javascript" src="/bundle.js" />
			</body>
			</html>
			)
	}
});