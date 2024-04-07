// The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together.
// The power of the minimum set of cubes in game 1 is 48. In games 2-5 it was 12, 1560, 630, and 36, respectively.
// Adding up these five powers produces the sum 2286.
//
// For each game, find the minimum set of cubes that must have been present.

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

export const solve = (challengeData: string): number => {
	const gamePowers: number[] = []

	challengeData
		.split("\n")
		.forEach(line => {
			const lowercaseLine = line.toLowerCase()
			const gameId = extractGameId(lowercaseLine)
			const blueCounts = extractColour(lowercaseLine, COLOURS.BLUE)
			const redCounts = extractColour(lowercaseLine, COLOURS.RED)
			const greenCounts = extractColour(lowercaseLine, COLOURS.GREEN)

			const maxBlue = Math.max(...blueCounts)
			const maxRed = Math.max(...redCounts)
			const maxGreen = Math.max(...greenCounts)

			gamePowers.push(maxBlue * maxRed * maxGreen)
		})

	return gamePowers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
