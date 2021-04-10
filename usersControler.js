let { getUsers, addUsers } = require("./repository");

exports.usersControler = async (req, res) => {
	if (req.method === "POST") {
		addUsers("Dasha");
		res.write(JSON.stringify({ success: true }));
		res.end();
	} else {
		// getUsers((users) => {
		// 	res.write(users);
		// 	res.end();
		// });
    

		let users = await getUsers();
		res.write(users);
		res.end();

	}
};
