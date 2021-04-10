const fs = require("fs");



const getUsers = (callback) => {
	fs.readFile("users.json", function (err, buf) {
    debugger
		callback(buf.toString());
	});

	console.log("after calling readFile");
};

const addUsers = (name) => {
	return users.push({ name: name });
};

exports.getUsers = getUsers;
exports.addUsers = addUsers;
