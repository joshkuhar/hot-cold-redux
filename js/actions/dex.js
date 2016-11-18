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

var POST_SUCCESS = 'POST_SUCCESS';
var postSuccess = function(reply) {
    return {
        type: POST_SUCCESS,
        reply: reply
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

exports.POST_SUCCESS = POST_SUCCESS;
exports.postSuccess = postSuccess;
exports.FETCH_ERROR = FETCH_ERROR;
exports.fetchError = fetchError;
/*
data model
{guesses: [3, 4, 5]}
{guess: "2"}
{"reply": "Not the lowest"}
*/

var fetchScores = function() {
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
exports.fetchScores = fetchScores;

var postScore = function(guess) {
    return function(dispatch) {
        var url = 'http://localhost:8080/fewest-guesses';
        return fetch(url, {
        method: "POST",
        body: JSON.stringify({guess : guess}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        return dispatch(
            postSuccess(data.reply)
            )
    }).catch(function(error) {
        return dispatch(
            fetchError(error)
            );
        });
    }
};
exports.postScore = postScore;













