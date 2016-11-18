require('isomorphic-fetch');

var REPORT_TEMP = 'REPORT_TEMP';
var reportTemp = function(temp) {
	return {
		type: REPORT_TEMP,
		guess: temp
	}
};
exports.REPORT_TEMP = REPORT_TEMP;
exports.reportTemp = reportTemp;

var FETCH_SUCCESS = 'FETCH_SUCCESS';
var fetchSuccess = function(answer) {
    return {
        type: FETCH_SUCCESS,
        answer: answer
    };
};

var FETCH_ERROR= 'FETCH_ERROR';
var fetchError = function(repository, error) {
    console.log(error);
    return {
        type: FETCH_ERROR,
        repository: repository,
        error: error
    };
};

exports.FETCH_SUCCESS = FETCH_SUCCESS;
exports.fetchSuccess = fetchSuccess;
exports.FETCH_ERROR = FETCH_ERROR;
exports.fetchError = fetchError;
/*
data model
{guesses: [3, 4, 5]}
{guess: "2"}
{"reply": "Not the lowest"}
*/

var fetchAnswer = function() {
    return function(dispatch) {
        var url = 'http://localhost:8080/fewest-guesses';
        return fetch(url)  
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        })
        .catch(function(error) {
            console.log(error);
            return dispatch(
                fetchError(error)
            );
        });
    }
};
exports.fetchAnswer = fetchAnswer;

var postAnswer = function() {
    return function(dispatch) {
        var guess = {guess: "21"};
        var url = 'http://localhost:8080/fewest-guesses';
        return fetch(url, {
        method: "POST",
        body: JSON.stringify(guess),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data)
    }).catch(function(error) {
        return dispatch(
            fetchError(error)
            );
        });
    }
};
exports.postAnswer = postAnswer;













