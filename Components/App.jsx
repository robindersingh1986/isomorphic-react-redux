import React from "react";
import CreateReactClass from "create-react-class";

module.exports = CreateReactClass({
	render:()=>(
			<html>
			<body>
			<div id="container">
				<ul>
					<li>Test 1</li>
					<li>Test 2</li>
				</ul>
			</div>
			<script type="javascript" src="/bundle.js" />
			</body>
			</html>
		)
});


/*
module.exports = CreateReactClass({
	render:function(){
		return (
			<html>
			<body>
			<div id="container">
				<ul>
					<li>Test 1</li>
					<li>Test 2</li>
				</ul>
			</div>
			</body>
			</html>
		)
	}
});
*/
//export default App;