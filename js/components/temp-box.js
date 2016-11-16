var React = require('react');
var data = require('../data');

var Temp = React.createClass({
	reportTemp: function(){
		var temperature = "Hot"
	}
	render: function() {
		return (
			<div>
			{this.reportTemp}
			</div>
			);
	}

});

var mapStateToProps = function(state, props) {
    return {
        repositories: state
    };
};

var Container = connect(mapStateToProps)(RepositoryList);

module.exports = Temp;	