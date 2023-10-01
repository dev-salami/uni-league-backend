const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Result = require("../models/Result");
const { generateLeagueTable } = require("../utils/generateLeaguetable");
const {
	generateTopScorersAndAssisters,
} = require("../utils/generateTopScorerAndAssister");
// const {
// 	getTopScorersAndAssisters,
// } = require("../utils/generateTopScorerAndAssister");

const getSeasonTable = async (req, res) => {
	const { season } = req.query;
	if (season) {
		const seasonResult = await Result.find(req.query);
		// console.log(seasonResult);
		if (seasonResult.length === 0) {
			throw new CustomError.NotFoundError(
				"League table for this season not available"
			);
		} else {
			const leagueTable = generateLeagueTable(seasonResult);
			res.status(StatusCodes.OK).json(leagueTable);
		}
	} else {
		throw new CustomError.NotFoundError("Invalid params");
	}
};
const getSeasonTopScorerAndAssister = async (req, res) => {
	const { season } = req.query;
	console.log(req.query);
	if (season) {
		const seasonResult = await Result.find(req.query);
		// console.log(seasonResult);
		if (seasonResult.length === 0) {
			throw new CustomError.NotFoundError(
				"League TopScorer or Top Assister available for this season "
			);
		} else {
			const TopScorerAndAssister = generateTopScorersAndAssisters(seasonResult);
			res.status(StatusCodes.OK).json(TopScorerAndAssister);
		}
	} else {
		throw new CustomError.NotFoundError("Invalid params");
	}
};

module.exports = {
	getSeasonTable,
	getSeasonTopScorerAndAssister,
};
