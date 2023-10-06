const express = require("express");
const router = express.Router();

const {
	getAllFixture,
	deleteFixture,
	editFixture,
	getFixtureBySeason,
	getSeasonMatchdayFixture,
	createFixture,
	getCurrentSeasonAndMatchday,
} = require("../controllers/fixtureController");

router
	.route("/")
	.get(getAllFixture)
	.post(createFixture)
	
	router
	.route("/:id")

	.patch(editFixture)
	.delete(deleteFixture);

router.get("/get-season-fixtures", getFixtureBySeason);
router.get("/get-season-matchday", getSeasonMatchdayFixture);
router.get("/get-CurrentSeasonAndMatchday", getCurrentSeasonAndMatchday);
getCurrentSeasonAndMatchday;

module.exports = router;
