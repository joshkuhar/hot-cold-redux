var actions = require('../actions/dex');

var initialState = {};

var reducer = function(state, action) {
    console.log(state, action);
    state = state || initialState;
    if(action.type === actions.REPORT_TEMP) {
        return {tang: action.guess};
    }
    else if (action.type === actions.POST_SUCCESS) {
        console.log("hello" + action);
        return {reply: action.reply};
    }
    else if (action.type === actions.FETCH_ERROR) {
        throw new Error('No answer, something went wrong');
    }

    return state;
};

exports.reducer = reducer;