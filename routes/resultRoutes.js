const express = require("express");
const router = express.Router();

const {
	getAllResult,
	deleteResult,
	editResult,
	getResultBySeason,
	getSeasonMatchdayResult,
	createResult,
} = require("../controllers/resultController");

router
	.route("/")
	.get(getAllResult)
	.post(createResult)
	.patch(editResult)
	.delete(deleteResult);

router.get("/get-season-Results", getResultBySeason);
router.get("/get-season-matchday", getSeasonMatchdayResult);

module.exports = router;
