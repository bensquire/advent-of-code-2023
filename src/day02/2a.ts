// Determine which games would have been possible if the bag had been loaded with only:
// - 12 red cubes
// - 13 green cubes
// - 14 blue cubes
// What is the sum of the IDs of those games?

const TOTAL_RED = 12
const TOTAL_GREEN = 13
const TOTAL_BLUE = 14

enum COLOURS {
	BLUE = 'blue',
	RED = 'red',
	GREEN = 'green'
}

const extractGameId = (line: string): number => {
	const gameNumberRegex = /game (\d+):/;
	const gameNumberMatch = line.match(gameNumberRegex)
	return gameNumberMatch ? parseInt(gameNumberMatch[1], 10) : 0
}

const extractColour = (line: string, color: COLOURS): number[] => {
	const regex = new RegExp(`(\\d+) ${color}`, "g");
	const matches = line.match(regex);
	return matches ? matches.map(match => parseInt(match.match(/\d+/)![0])) : [];
}

export const solveDayTwoA = (challengeData: string): number => {
	const validGameIds: number[] = []

	challengeData
		.split("\n")
		.forEach(line => {
			const lowercaseLine = line.toLowerCase()
			const gameId = extractGameId(lowercaseLine)
			const blueCounts = extractColour(lowercaseLine, COLOURS.BLUE)
			const redCounts = extractColour(lowercaseLine, COLOURS.RED)
			const greenCounts = extractColour(lowercaseLine, COLOURS.GREEN)

			const isGamePossible =
				blueCounts.every(count => TOTAL_BLUE >= count) &&
				redCounts.every(count => TOTAL_RED >= count) &&
				greenCounts.every(count => TOTAL_GREEN >= count)

			if (isGamePossible) {
				validGameIds.push(gameId)
			}
		})

	return validGameIds.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
