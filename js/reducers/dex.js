var actions = require('../actions/dex');

var initialState = {};

var reducer = function(state, action) {
    state = state || initialState;
    if(action.type === actions.REPORT_TEMP) {
        return {tang: action.guess};
    }
    else if (action.type === actions.FETCH_SUCCESS) {
        // Find the index of the matching repository
        return {answer: action.answer};
    }
    else if (action.type === actions.FETCH_ERROR) {
        // Find the index of the matching repository
        throw new Error('No answer, something went wrong');
    }

    return state;
};

exports.reducer = reducer;