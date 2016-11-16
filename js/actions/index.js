var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guessNumber) {
	return {
		type: GUESS_NUMBER,
		guess: guessNumber
	};
};
var SUBMIT_GUESS = 'SUBMIT_GUESS';
var submitGuess = function(guess) {
	return {
		type: SUBMIT_GUESS,
		guess: guess,
		correct: null
	}
}
var DISPLAY_GUESSES = 'DISPLAY_GUESS';
var displayGuess = function(display) {
	return {
		type: DISPLAY_GUESSES,
		display: display
	}
}
var REPORT_TEMP = 'REPORT_TEMP';
var reportTemp = function(temp) {
	return {
		type: REPORT_TEMP,
		temp: temp
	}
}

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
