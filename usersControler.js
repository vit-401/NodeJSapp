let { getUsers, addUsers } = require("./repository");

exports.usersControler = async (req, res) => {
	if (req.method === "POST") {
		let result = await addUsers("Dasha");
		res.write(JSON.stringify({ success: true }));
		res.end();
	} else {
		let users = await getUsers();
		res.write(JSON.stringify(users));
		res.end();
	}
};
