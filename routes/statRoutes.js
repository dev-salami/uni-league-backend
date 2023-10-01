const express = require("express");
const router = express.Router();

const {
	getSeasonTable,
	getSeasonTopScorerAndAssister,
} = require("../controllers/statController");

router.get("/tables", getSeasonTable);
router.get("/top-scorer-assist", getSeasonTopScorerAndAssister);

module.exports = router;
