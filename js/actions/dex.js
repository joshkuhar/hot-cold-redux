var REPORT_TEMP = 'REPORT_TEMP';
var reportTemp = function(temp) {
	return {
		type: REPORT_TEMP,
		guess: temp
	}
};

exports.REPORT_TEMP = REPORT_TEMP;
exports.reportTemp = reportTemp;
