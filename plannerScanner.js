const readline = require("readline")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

main()

function main() {
	let confirmedBirthYear
	let confirmedBirthMonth
	let confirmedBirthDate
	let confirmedBirthDateObj
	let confirmedPlannerStartDate
	ascertainBirthYear()
}

//Year

function ascertainBirthYear() {
	rl.question(
		"Hello. In what year were you born? (Answer format: YYYY) ",
		(birthYear) => {
			confirmBirthYear(birthYear)
		}
	)
}

function confirmBirthYear(birthYear) {
	rl.question(
		`Noted. You answered ${birthYear}. Is that correct? (Y/N) `,
		(answer) => {
			if (answer.toUpperCase() === "Y") {
				confirmedBirthYear = birthYear
				ascertainBirthMonth()
			} else {
				reAscertainBirthYear()
			}
		}
	)
}

function reAscertainBirthYear() {
	console.log(`No worries! "To err is human," as they say!`)
	rl.question("What year were you born in, though? (YYYY) ", (birthYear) => {
		confirmBirthYear(birthYear)
	})
}

//Month

function ascertainBirthMonth() {
	rl.question(
		"Great! How about the month? What month were you born in? (MM) ",
		(birthMonth) => {
			confirmBirthMonth(birthMonth)
		}
	)
}

function confirmBirthMonth(birthMonth) {
	rl.question(
		`Got it. You answered ${birthMonth}. Is that correct? (Y/N) `,
		(answer) => {
			if (answer.toUpperCase() === "Y") {
				confirmedBirthMonth = birthMonth - 1
				//JS Date months are zero-indexed; no human knows this convention
				ascertainBirthDate()
			} else {
				reAscertainBirthMonth()
			}
		}
	)
}

function reAscertainBirthMonth() {
	console.log(
		`That's okay. As an emotionless logic chain, I am blessed with infinite patience!`
	)
	rl.question("What month were you born in, though? (MM) ", (birthMonth) => {
		confirmBirthMonth(birthMonth)
	})
}

//Date

function ascertainBirthDate() {
	rl.question(
		"Outstanding! And what date were you born on? (DD) ",
		(birthDate) => {
			confirmBirthDate(birthDate)
		}
	)
}

function confirmBirthDate(birthDate) {
	rl.question(
		`Perfect. You answered ${birthDate}. Is that correct? (Y/N) `,
		(answer) => {
			if (answer.toUpperCase() === "Y") {
				confirmedBirthDate = birthDate
				finalConfirmation()
			} else {
				reAscertainBirthDate()
			}
		}
	)
}

function reAscertainBirthDate() {
	console.log(`Worry not! I have all the time in the world!`)
	rl.question("What is your date of birth? (DD) ", (birthDate) => {
		confirmBirthDate(birthDate)
	})
}

//final confirm

function finalConfirmation() {
	confirmedBirthDateObj = new Date(
		confirmedBirthYear,
		confirmedBirthMonth,
		confirmedBirthDate
	)
	console.log(
		`Okay. You were born on ${confirmedBirthDateObj.toDateString()}. `
	)
	ascertainPlannerYear()
}

//planner year

function ascertainPlannerYear() {
	rl.question(
		`What year is the planner you'd like to populate? `,
		(plannerYear) => {
			confirmPlannerYear(plannerYear)
		}
	)
}

function confirmPlannerYear(plannerYear) {
	rl.question(
		`I have that we're looking forward to ${plannerYear}. Is that correct? (Y/N) `,
		(answer) => {
			if (answer.toUpperCase() === "Y") {
				confirmedPlannerStartDate = new Date(plannerYear, 0, 1) //Jan 1st
				calculateDates()
			} else {
				reAscertainPlannerYear()
			}
		}
	)
}

function reAscertainPlannerYear() {
	const currentYear = new Date().getYear()
	console.log(
		`It's okay - I'm sure you faced a lot of challenges in ${currentYear}. Take your time.`
	)
	rl.question(
		"What year have you purchased a planner for? (YYYY) ",
		(plannerYear) => {
			confirmPlannerYear(plannerYear)
		}
	)
}

//calculate dates loop
function calculateDates() {
	console.log(
		`So, you were born on ${confirmedBirthDateObj.toDateString()}...`
	)
	console.log(
		`...and the confirmed planner start date is ${confirmedPlannerStartDate.toDateString()}`
	)
	const daysOld = calculateDifferenceBetweenTwoDatesInDays(
		confirmedBirthDateObj,
		confirmedPlannerStartDate
	)
	console.log(
		`You will be ${daysOld} days old on the first of the year! Congratulations!`
	)
	const plannerYearDateObj = constructPlannerYearDateObject(
		confirmedBirthDateObj,
		confirmedPlannerStartDate
	)
	scanDateObjectForImportantDates(plannerYearDateObj)
	rl.close()
}

function constructPlannerYearDateObject(birthdayObj, plannerYearStartObj) {
	const plannerYearDateObj = {}
	const currentYear = plannerYearStartObj.getYear()
	let movingDateObj = new Date(plannerYearStartObj.getTime())
	while (movingDateObj.getYear() === currentYear) {
		const key = calculateDifferenceBetweenTwoDatesInDays(
			birthdayObj,
			movingDateObj
		)
		plannerYearDateObj[key] = movingDateObj
		let currentTime = movingDateObj.getTime()
		let tomorrow = currentTime + 24 * 60 * 60 * 1000
		movingDateObj = new Date(tomorrow)
	}
	return plannerYearDateObj
}

function calculateDifferenceBetweenTwoDatesInDays(earlierDate, laterDate) {
	const differenceInMilliseconds = laterDate - earlierDate
	return convertMillisecondsToDays(differenceInMilliseconds)
}

function convertMillisecondsToDays(valueInMS) {
	return valueInMS / (1000 * 60 * 60 * 24)
}

function scanDateObjectForImportantDates(dateObj) {
	for (let key in dateObj) {
		noteDateIfDivisibleByTen(key, dateObj)
		noteDateIfPalindromic(key, dateObj)
	}
}

function noteDateIfDivisibleByTen(key, dateObj) {
	if (key[key.length - 1] === "0") {
		let powerOfTen = 1
		while (key[key.length - powerOfTen - 1] === "0") {
			powerOfTen++
		}
		if (powerOfTen > 1) console.log()
		console.log(
			`Journal Entry, E${powerOfTen}: ${key}, ${dateObj[key].toDateString()}`
		)
	}
}

function noteDateIfPalindromic(key, dateObj) {
	let firstIdx = 0
	let lastIdx = key.length - 1
	while (key[firstIdx] === key[lastIdx]) {
		if (firstIdx === lastIdx) {
			console.log(
				`Palindromic Day! : ${key}, ${dateObj[key].toDateString()}`
			)
			break
		}
		firstIdx++
		lastIdx--
	}
}
