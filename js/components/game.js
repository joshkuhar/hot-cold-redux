var React = require('react');
var Reply = require('./display-reply');
var PostScore = require('./post-score');
var Temp = require('./guesses-bttn');
// var data = require('../data');

var Game = React.createClass({
	render: function() {
		return(
			<div>
				<PostScore />
				<Reply />
				<Temp />
			</div>
			);
	}
});

module.exports = Game;