const fs = require("fs");

const getUsers = () => {
	return new Promise((resolve, reject) => {
		fs.readFile("users.json", function (err, buf) {
			if (err) {
				reject(err);
			} else {
				resolve(JSON.parse(buf.toString()));
			}
		});
	});
};

const addUsers = async (name) => {
	let users = await getUsers();
	users.push({ name: name });

	return new Promise((resolve, reject) => {
		fs.writeFile("users.json", JSON.stringify(users), (err) => {
			if (err) reject(err);
			resolve();
		});
	});
};

exports.getUsers = getUsers;
exports.addUsers = addUsers;
