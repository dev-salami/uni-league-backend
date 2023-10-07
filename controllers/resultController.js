const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Result = require("../models/Result");

// const getResultBySeason = async (req, res) => {
// 	const { season } = req.query;

// 	res.status(StatusCodes.OK).send({ season });
// };
// const getAllResult = async (req, res) => {
// 	res.status(StatusCodes.OK).send("getAllResult");
// };
// const createResult = async (req, res) => {
// 	res.status(StatusCodes.OK).send("createResult");
// };
// const getSeasonMatchdayResult = async (req, res) => {
// 	const { season, matchday } = req.query;

// 	res.status(StatusCodes.OK).send({ season, matchday });
// };
const getResultBySeason = async (req, res) => {
	const { season } = req.query;
	if (season) {
		const seasonResult = await Result.find(req.query);
		if (!seasonResult) {
			throw new CustomError.NotFoundError(
				"Result for this season not available"
			);
		} else {
			res.status(StatusCodes.OK).json(seasonResult);
		}
	} else {
		const seasonResult = await Result.find({ season: 6 });
		if (!seasonResult) {
			throw new CustomError.NotFoundError(
				"Result for this season not available"
			);
		} else {
			res.status(StatusCodes.OK).json(seasonResult);
		}
	}
};
const getAllResult = async (req, res) => {
	const allResult = await Result.find({});
	if (!allResult) {
		throw new CustomError.NotFoundError("No Results was found");
	} else {
		res.status(StatusCodes.OK).json(allResult);
	}
};
const createResult = async (req, res) => {
	const {
		homeTeam,
		awayTeam,
		venue,
		time,
		date,
		matchday,
		season,
		homeTeamScorer,
		awayTeamScorer,
		homeTeamScore,
		awayTeamScore,
	} = req.body;
	const result = await Result.create({
		homeTeam,
		awayTeam,
		venue,
		time,
		date,
		matchday,
		season,
		homeTeamScorer,
		awayTeamScorer,
		homeTeamScore,
		awayTeamScore,
	});
	// console.log(EditedResult);
	if (!result) {
		throw new CustomError.BadRequestError("Something went wrong");
	}

	res.status(StatusCodes.CREATED).json(result);
};
const getSeasonMatchdayResult = async (req, res) => {
	const { season, matchday } = req.query;

	if (season && matchday) {
		const seasonResult = await Result.find(req.query);
		if (!seasonResult) {
			throw new CustomError.NotFoundError(
				"No result for this selected matchday and season"
			);
		} else {
			res.status(StatusCodes.OK).json(seasonResult);
		}
	} else {
		throw new CustomError.BadRequestError("Invalid params");
	}
};
const editResult = async (req, res) => {
	res.status(StatusCodes.OK).send("editResult");
};
const deleteResult = async (req, res) => {
	res.status(StatusCodes.OK).send("deleteResult");
};

module.exports = {
	getAllResult,
	getResultBySeason,
	getSeasonMatchdayResult,
	deleteResult,
	editResult,
	createResult,
};
