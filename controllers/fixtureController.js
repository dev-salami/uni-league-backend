const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Fixture = require("../models/Fixture");
const {
	findMaxSeasonAndMatchday,
} = require("../utils/getCurrentSeasonAndMatchday");

const getFixtureBySeason = async (req, res) => {
	const { season } = req.query;
	if (season) {
		const seasonFixture = await Fixture.findOne(req.query);
		if (!seasonFixture) {
			throw new CustomError.NotFoundError(
				"Fixture for this season not available"
			);
		} else {
			res.status(StatusCodes.OK).json(seasonFixture);
		}
	} else {
		const seasonFixture = await Fixture.findOne({ season: 6 });
		if (!seasonFixture) {
			throw new CustomError.NotFoundError(
				"Fixture for this season not available"
			);
		} else {
			res.status(StatusCodes.OK).json(seasonFixture);
		}
	}
};
const getAllFixture = async (req, res) => {
	const allFixture = await Fixture.find({});
	if (!allFixture) {
		throw new CustomError.NotFoundError("No Fixtures was found");
	} else {
		res.status(StatusCodes.OK).json(allFixture);
	}
};
const createFixture = async (req, res) => {
	const fixture = await Fixture.create(req.body);
	if (!fixture) {
		throw new CustomError.BadRequestError("Something went wrong");
	}

	res.status(StatusCodes.CREATED).send(fixture);
};
const getSeasonMatchdayFixture = async (req, res) => {
	const { season, matchday } = req.query;

	if (season && matchday) {
		const seasonFixture = await Fixture.find(req.query);
		if (!seasonFixture) {
			throw new CustomError.NotFoundError(
				"No fixture for this selected matchday and season"
			);
		} else {
			res.status(StatusCodes.OK).json(seasonFixture);
		}
	} else {
		throw new CustomError.BadRequestError("Invalid params");
	}
};
const editFixture = async (req, res) => {
	res.status(StatusCodes.OK).send("editFixture");
};
const deleteFixture = async (req, res) => {
	res.status(StatusCodes.OK).send("deleteFixture");
};
const getCurrentSeasonAndMatchday = async (req, res) => {
	const allFixture = await Fixture.find({});
	const { currentSeason, currentMatchday } =
		findMaxSeasonAndMatchday(allFixture);

	res.status(StatusCodes.OK).send({ currentSeason, currentMatchday });
};

module.exports = {
	getAllFixture,
	getFixtureBySeason,
	getSeasonMatchdayFixture,
	deleteFixture,
	editFixture,
	createFixture,
	getCurrentSeasonAndMatchday,
};
