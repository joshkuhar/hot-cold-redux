var React = require('react');

var showGuess = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.guess}
			</div>
			);
	}
});

module.exports = showGuess;