const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
	homeTeam: {
		type: String,
		required: true,
	},
	awayTeam: {
		type: String,
		required: true,
	},
	homeTeamScorer: [
		[
			{
				type: String,
			},
		],
	],
	awayTeamScorer: [
		[
			{
				type: String,
			},
		],
	],
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
	homeTeamScore: {
		type: Number,
		required: true,
	},
	awayTeamScore: {
		type: Number,
		required: true,
	},
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
