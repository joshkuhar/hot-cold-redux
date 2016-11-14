// guess number
// submit guess
// check guess
// generate random number
// display guess
// keep track of guess
// determine if hot or cold

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guess) {
	return {
		type: GUESS_NUMBER,
		guess: guess
	};
};
var SUBMIT_GUESS = 'SUBMIT_GUESS';
var submitGuess = function(submit) {
	return {
		type: SUBMIT_GUESS,
		submit: submit
	}
}
var CHECK_GUESS = 'CHECK_GUESS';
var checkGuess = function(check) {
	return {
		type: CHECK_GUESS,
		check: check
	};
};
var GENERATE_NUMBER = 'GENERATE_NUMBER';
var generateNumber = function(generate) {
	return {
		type: GENERATE_NUMBER,
		generate: generate		
	}
}
var DISPLAY_GUESS = 'DISPLAY_GUESS';
var displayGuess = function(display) {
	return {
		type: DISPLAY_GUESS,
		display: display
	}
}
var TRACK_GUESS = 'TRACK_GUESS';
var trackGuess = function(track) {
	return {
		type: TRACK_GUESS,
		track: track		
	}
}
var REPORT_TEMP = 'REPORT_TEMP';
var reportTemp = function(temp) {
	return {
		type: REPORT_TEMP,
		temp: temp
	}
}