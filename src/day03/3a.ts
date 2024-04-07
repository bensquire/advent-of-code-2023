export const solve = (challengeData: string): number => {
	const lines: string[] = challengeData.split("\n")
	let total: number = 0;

	for (let y = 0; y < lines.length; y++) {
		// Replace all full-stops with spaces, they aren't considered "symbols"
		// This should leave only integer numbers and valid symbols
		const cleanedLine: string = lines[y].replace(/\./g, " ");

		// Find all numbers (including multi-digit, on the line)
		const numbersOnLine = cleanedLine.matchAll(/\d+/g)

		// Iterate over the found numbers
		for (const match of numbersOnLine) {
			const number = parseInt(match[0], 10)
			const startPosition = match.index
			const numberOfDigits = match[0].length
			const boundingPositions: string[] = []

			// Top Left, try to find character at position, but fall back to '.' if nothing found
			boundingPositions.push(lines[y - 1]?.[startPosition - 1] ?? ".")

			// Across the top
			for (let j = match.index; j < match.index + match[0].length; j++) {
				boundingPositions.push(lines[y - 1]?.[j] ?? ".")
			}

			// Top Right
			boundingPositions.push(lines[y - 1]?.[startPosition + numberOfDigits] ?? ".")

			// Left
			boundingPositions.push(lines[y]?.[startPosition - 1] ?? ".")

			// Actual digits (don't check them)

			// Right
			boundingPositions.push(lines[y]?.[startPosition + numberOfDigits] ?? ".")

			// Bottom Left
			boundingPositions.push(lines[y + 1]?.[startPosition - 1] ?? ".")

			// Across the bottom
			for (let j = match.index; j < match.index + match[0].length; j++) {
				boundingPositions.push(lines[y + 1]?.[j] ?? ".")
			}

			// Bottom Right
			boundingPositions.push(lines[y + 1]?.[startPosition + numberOfDigits] ?? ".")

			// Do any of the positions around the number contain anything that is not a number of a full-stop?
			if (boundingPositions.some(boundingPosition => /[^0-9.]/.test(boundingPosition))) {
				total += number;
			}
		}
	}

	return total
}
