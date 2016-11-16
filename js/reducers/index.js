var actions = require('../actions/index');

var initialState = {};

var reducer = function(state, action) {
    state = state || initialState;
    if(actions.type === GUESS_NUMBER) {
    	return state.concat({
    		guess: actions.guess
    	});
    }
    if(action.type === SUBMIT_GUESS) {
    	if(actions.guess == state.answer) {
    		return state.concact ({
    			guess: actions.guess,
    			correct: true
    		});
    	}
    	else if (actions.guess != state.answer) {
    		return state.concact ({
    			guess: actions.guess,
    			correct: false
    		});
    	}
    }
    if(actions.type === DISPLAY_GUESSES) {
    	return state.concact ({
    		display: actions.display
    	});
    }
    return state;
};

// Initial state should be 

// REDUCER TEMPLATE
// var initialState = [];
// var nameOfReducer = function(state, action) {
//     state = state || initialState;
//     return state;
// };





exports.reducer = reducer;