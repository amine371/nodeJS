 const fs = require("fs");
const file = process.argv[2];

fs.readFile(file, (err,data) => {
	if(err) {
		return console.error(err);
	}
	const buffer = data.toString().split("\n");

	console.log(buffer.length-1);
}); 