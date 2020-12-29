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
	const confirmedBirthday = new Date(
		confirmedBirthYear,
		confirmedBirthMonth,
		confirmedBirthDate
	)
	console.log(`Okay. You were born on ${confirmedBirthday.toDateString()}. `)
	ascertainDesiredPlannerYear()
}

function ascertainDesiredPlannerYear() {
	console.log("Temporary home of rl.close().")
	rl.close()
}

// And in what month? (Answer format: MM) ",
// 				(birthMonth) => {
// 					rl.question(
// 						"Fascinating. What about the date? (Answer format: DD) ",
// 						(birthDate) => {
// 							const fullBirthDate = new Date(
// 								birthYear,
// 								birthMonth - 1,
// 								birthDate
// 							)

// 							console.log(
// 								`Great! I have your details as ${fullBirthDate}`
// 							)
// 						}
// 					)
// 				}

//rl.close() at end of every loop
