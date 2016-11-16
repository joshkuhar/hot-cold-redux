var actions = require('../actions/dex');

var initialState = {};

var reducer = function(state, action) {
    state = state || initialState;
    if(action.type === actions.REPORT_TEMP) {
        return {wu: action.guess}
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