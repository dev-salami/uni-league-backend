const express = require("express");
const router = express.Router();

const {
	getAllFixture,
	deleteFixture,
	editFixture,
	getFixtureBySeason,
	getSeasonMatchdayFixture,
	createFixture,
} = require("../controllers/fixtureController");

router
	.route("/")
	.get(getAllFixture)
	.post(createFixture)
	.patch(editFixture)
	.delete(deleteFixture);

router.get("/get-season-fixtures", getFixtureBySeason);
router.get("/get-season-matchday", getSeasonMatchdayFixture);

module.exports = router;
