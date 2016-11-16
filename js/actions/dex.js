var REPORT_TEMP = 'REPORT_TEMP';
var reportTemp = function(temp) {
	return {
		type: REPORT_TEMP,
		temp: temp
	}
};

exports.REPORT_TEMP = REPORT_TEMP;
exports.reportTemp = reportTemp;
