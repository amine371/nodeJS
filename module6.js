const fs = require("fs");
const path = require("path");

module.exports = (arg1, arg2, callback) => {
	const repository = arg1;
	const extension = `.${arg2}`;
	const result = [];
	
	fs.readdir(repository, (err, files) => {
		if(err) return callback(err);
 		else {
			files.forEach(file  => {
				if(path.extname(file) === extension) {
					return result.push(file);		
				}
			});
			callback(null, result);
		}
	});
};