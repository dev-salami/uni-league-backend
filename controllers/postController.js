const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Result = require("../models/Result");
const { generateLeagueTable } = require("../utils/generateLeaguetable");
const {
	generateTopScorersAndAssisters,
} = require("../utils/generateTopScorerAndAssister");
const Post = require("../models/Post");
// const {
// 	getTopScorersAndAssisters,
// } = require("../utils/generateTopScorerAndAssister");

const getAllPost = async (req, res) => {
	const posts = await Post.find({});
	if (posts.length === 0) {
		res.status(StatusCodes.OK).send("There are no Post");
	} else {
		res.status(StatusCodes.OK).json(posts);
	}
};

const createPost = async (req, res) => {
	const post = await Post.create(req.body);
	// console.log(seasonResult);
	if (!post) {
		throw new CustomError.BadRequestError("Something went Wrong");
	} else {
		res.status(StatusCodes.OK).json(post);
	}
};

module.exports = {
	getAllPost,
	createPost,
};
