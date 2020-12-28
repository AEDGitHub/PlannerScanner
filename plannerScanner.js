/**
 * Planner Scanner
 */

const readline = require("readline")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

function ascertainBirthYear() {
	rl.question(
		"Hello. In what year were you born? (Answer format: YYYY) ",
		(birthYear) => {
			confirmBirthYear(birthYear)
		}
	)
}

function reAscertainBirthYear() {
	console.log(`No worries! "To err is human," as they say!`)
	rl.question("What year were you born in, though? (YYYY) ", (birthYear) => {
		confirmBirthYear(birthYear)
	})
}

function confirmBirthYear(birthYear) {
	rl.question(
		`Noted. You answered ${birthYear}. Is that correct? (Y/N) `,
		(answer) => {
			if (answer.toUpperCase() === "Y") {
				// ascertainBirthMonth()
				console.log("Proceeds to month")
			} else if (answer.toUpperCase() === "N") {
				reAscertainBirthYear()
			} else {
				confusedLackOfBirthYear(answer)
				console.log(
					"Asks new question asking if person is invested in process."
				)
			}
		}
	)
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

ascertainBirthYear()
//rl.close() at end of every loop
