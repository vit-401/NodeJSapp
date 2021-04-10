let http = require("http");

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
			res.write(`[{ "id": 1, "name": "Vitaliy"}, {"id": 2, "name": "Alex" }]`);
			break;
		default:
			res.write("404");
			break;
	}
	res.end();
});
server.listen(4000);
