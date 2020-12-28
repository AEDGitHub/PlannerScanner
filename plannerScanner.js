/**
 * Planner Scanner
 */

const readline = require("readline")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

core()

function core() {
	ascertainBirthYear()
}

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
				var confirmedBirthYear = birthYear
				ascertainBirthMonth()
			} else if (answer.toUpperCase() === "N") {
				reAscertainBirthYear()
			} else {
				// future home of more advanced questioning, instead of...
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
				var confirmedBirthMonth = birthMonth - 1 //months in JS Date class are zero-indexed
				//ascertainBirthDate()
				console.log("Temporary home of rl.close()!")
				rl.close()
			} else if (answer.toUpperCase() === "N") {
				reAscertainBirthMonth()
			} else {
				// future home of more advanced questioning, instead of...
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
