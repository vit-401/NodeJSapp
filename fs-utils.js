const fs = require("fs");

exports.readJsonFormFile = (filePath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, function (err, buf) {
			if (err) {
				reject(err);
			} else {
				resolve(JSON.parse(buf.toString()));
			}
		});
	});
};

exports.readJsonToFile = (filePath, data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(filePath, JSON.stringify(data), (err) => {
			if (err) reject(err);
			resolve();
		});
	});
};
