const mongoose = require('mongoose');
const config = require("../config/config.js");
const colors = require("colors");

module.exports = (client) => {
	console.log("Trying to go gt them geese ".brightYellow);
	const mongo = process.env.MONGO || config.Handlers.MONGO;
	
	if (!mongo) {
		console.log("No mongo?".red);
	} else {
		mongoose.connect(mongo, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}).catch((e) => console.log(e))

		mongoose.connection.once("open", () => {
			console.log("Connected to mongo".brightGreen);
		})
		return;
	}
}
