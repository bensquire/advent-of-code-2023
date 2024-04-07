const isNumeric = (str: string): boolean => {
	return /^\d+$/.test(str)
}

const findFirstNumber = (input: string) => {
	const totalLetters = input.length

	for (let i = 0; i < totalLetters; i++) {
		const char = input.charAt(i)
		if (isNumeric(char)) {
			return char.toString()
		}
	}

	return '0'
}

const findLastNumber = (input: string) => {
	const totalLetters = input.length

	for (let i = totalLetters - 1; i >= 0; i--) {
		const char = input.charAt(i)
		if (isNumeric(char)) {
			return char.toString()
		}
	}

	return '0'
}

export const solve = (inputStrings: string[]) => {
	let total: number = 0

	inputStrings.forEach((inputString: string) => {
		const firstNum = findFirstNumber(inputString)
		const lastNum = findLastNumber(inputString)
		const numberAppended = firstNum.toString() + lastNum.toString()
		total += parseInt(numberAppended, 10)
	})

	return total
}
