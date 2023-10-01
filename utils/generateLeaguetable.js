const generateLeagueTable = (results) => {
	// Create an empty object to store team data
	const teams = {};

	// Loop through each match in the results array
	results.forEach((match) => {
		const { homeTeam, awayTeam, homeTeamScore, awayTeamScore } = match;

		// Initialize team data if not already present
		if (!teams[homeTeam]) {
			teams[homeTeam] = {
				name: homeTeam,
				points: 0,
				played: 0,
				won: 0,
				drawn: 0,
				lost: 0,
				goalsFor: 0,
				goalsAgainst: 0,
			};
		}
		if (!teams[awayTeam]) {
			teams[awayTeam] = {
				name: awayTeam,
				points: 0,
				played: 0,
				won: 0,
				drawn: 0,
				lost: 0,
				goalsFor: 0,
				goalsAgainst: 0,
			};
		}

		// Update team statistics based on match results
		teams[homeTeam].played++;
		teams[awayTeam].played++;

		teams[homeTeam].goalsFor += homeTeamScore;
		teams[awayTeam].goalsFor += awayTeamScore;

		teams[homeTeam].goalsAgainst += awayTeamScore;
		teams[awayTeam].goalsAgainst += homeTeamScore;

		if (homeTeamScore > awayTeamScore) {
			teams[homeTeam].won++;
			teams[homeTeam].points += 3;
			teams[awayTeam].lost++;
		} else if (homeTeamScore < awayTeamScore) {
			teams[awayTeam].won++;
			teams[awayTeam].points += 3;
			teams[homeTeam].lost++;
		} else {
			teams[homeTeam].drawn++;
			teams[homeTeam].points++;
			teams[awayTeam].drawn++;
			teams[awayTeam].points++;
		}
	});

	// Convert the teams object into an array and sort by points and goal difference
	const leagueTable = Object.values(teams).sort((a, b) => {
		if (a.points === b.points) {
			return b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst);
		}
		return b.points - a.points;
	});

	return leagueTable;
};

module.exports = { generateLeagueTable };
