var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/dex');

var showGuesses = React.createClass({
	postScore: function() {
		var score = this.refs.myScore.value;
		this.props.dispatch(actions.postScore(score));
	},
	render: function() {
		return (
			<div>
				<input type="text" ref="myScore" />
				<button type="button" onClick={this.postScore}>
				submit score
				</button>
			</div>
			);
	}
});
var Container = connect()(showGuesses);

module.exports = Container;