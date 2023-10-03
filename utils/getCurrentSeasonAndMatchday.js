function findMaxSeasonAndMatchday(matches) {
	if (!Array.isArray(matches) || matches.length === 0) {
		return null; // Handle invalid input gracefully
	}

	let currentSeason = -Infinity;
	let currentMatchday = -Infinity;

	for (const match of matches) {
		if (match.season > currentSeason) {
			currentSeason = match.season;
		}
		if (match.matchday > currentMatchday) {
			currentMatchday = match.matchday;
		}
	}

	return { currentSeason, currentMatchday };
}
module.exports = { findMaxSeasonAndMatchday };

// Example usage:
//   const matches = [
//     {
//       "_id": "650e9966751d836f2b24f986",
//       "homeTeam": "Chelsea",
//       "awayTeam": "Arsenal",
//       "venue": "Old Trafford",
//       "time": "18.00",
//       "date": "2023-09-29",
//       "matchday": 4,
//       "season": 6,
//       "__v": 0
//     },
//     // Add more matches if needed
//   ];

//   const { maxSeason, maxMatchday } = findMaxSeasonAndMatchday(matches);

//   if (maxSeason !== -Infinity && maxMatchday !== -Infinity) {
//     console.log("Maximum Season:", maxSeason);
//     console.log("Maximum Matchday:", maxMatchday);
//   } else {
//     console.log("No valid matches found.");
//   }
