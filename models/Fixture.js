const mongoose = require("mongoose");

const fixtureSchema = new mongoose.Schema({
	homeTeam: {
		type: String,
		required: true,
	},
	awayTeam: {
		type: String,
		required: true,
	},

	venue: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	matchday: {
		type: Number,
		required: true,
	},
	season: {
		type: Number,
		required: true,
	},
});

const Fixture = mongoose.model("Fixture", fixtureSchema);

module.exports = Fixture;
