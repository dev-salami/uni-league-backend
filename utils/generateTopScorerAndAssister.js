const generateTopScorersAndAssisters = (matches) => {
	const playerStats = {}; // Object to store player statistics

	// Iterate through each match
	matches.forEach((match) => {
		// Process home team scorers and assisters
		match.homeTeamScorer.forEach(([goalScorer, assister]) => {
			if (!playerStats[goalScorer]) {
				playerStats[goalScorer] = {
					goals: 0,
					assists: 0,
					team: match.homeTeam,
				};
			}
			playerStats[goalScorer].goals += 1;

			if (assister) {
				if (!playerStats[assister]) {
					playerStats[assister] = {
						goals: 0,
						assists: 0,
						team: match.homeTeam,
					};
				}
				playerStats[assister].assists += 1;
			}
		});

		// Process away team scorers and assisters
		match.awayTeamScorer.forEach(([goalScorer, assister]) => {
			if (!playerStats[goalScorer]) {
				playerStats[goalScorer] = {
					goals: 0,
					assists: 0,
					team: match.awayTeam,
				};
			}
			playerStats[goalScorer].goals += 1;

			if (assister) {
				if (!playerStats[assister]) {
					playerStats[assister] = {
						goals: 0,
						assists: 0,
						team: match.awayTeam,
					};
				}
				playerStats[assister].assists += 1;
			}
		});
	});

	// Convert the playerStats object into an array
	const playerStatsArray = Object.entries(playerStats).map(([name, stats]) => ({
		name,
		team: stats.team,
		goals: stats.goals,
		assists: stats.assists,
	}));

	// Sort the playerStatsArray to get the top goal scorers and top assisters
	const topGoalScorers = playerStatsArray
		.sort((a, b) => b.goals - a.goals || b.assists - a.assists)
		.filter((player) => player.goals > 0); // Filter out players with no goals

	const topAssisters = playerStatsArray
		.sort((a, b) => b.assists - a.assists || b.goals - a.goals)
		.filter((player) => player.assists > 0); // Filter out players with no assists

	return { topGoalScorers, topAssisters };
};

module.exports = { generateTopScorersAndAssisters };
