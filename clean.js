var fs = require('fs');
console.log(__dirname+"/public");
var filePath = __dirname+"/public/bundle.js"; 

try{
	fs.unlinkSync(filePath);
}
catch(err){
	console.log("No bundle.js file found")
}