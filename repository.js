
const { readJsonFormFile, readJsonToFile } = require("./fs-utils");

const getUsers = () => {
	return readJsonFormFile("users.json");
};

const addUsers = async (name) => {
	let users = await getUsers();
	users.push({ name: name });

	return readJsonToFile("users.json", users);
};

exports.getUsers = getUsers;
exports.addUsers = addUsers;
