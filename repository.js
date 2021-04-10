const fs = require("fs");



const getUsers = () => {
	// fs.readFile("users.json", function (err, buf) {
  //   debugger
	// 	callback(buf.toString());
	// });

	// console.log("after calling readFile");

	return new Promise((resolve, reject) => {
		fs.readFile("users.json", function (err, buf) {
			resolve(buf.toString());
		});
	});

};

const addUsers = (name) => {
	return users.push({ name: name });
};

exports.getUsers = getUsers;
exports.addUsers = addUsers;
