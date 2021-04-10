let http = require("http");
let { usersControler } = require("./usersControler");

let cors = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Request-Method", "*");
	res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
	res.setHeader("Access-Control-Allow-Headers", "*");
	if (req.method === "OPTIONS") {
		res.writeHead(200);
		res.end();
		return true;
	}
	return false;
};

let server = http.createServer((req, res) => {
	if (cors(req, res)) return;
	switch (req.url) {
		case "/":
			debugger;
			res.write("Home Page");
			break;
		case "/users":
			usersControler(req, res);

			break;
		default:
			res.write("404");
			break;
	}
});
server.listen(4000);

// nodemon save!!!
