let users = [
	{ id: 1, name: "Vitaliy" },
	{ id: 2, name: "Alex" },
	{ id: 3, name: "Inna" },
];

const getUsers = () => {
	return users;
};

const addUsers = (name) => {
	return users.push({ name: name });
};

exports.getUsers = getUsers;
exports.addUsers = addUsers;
