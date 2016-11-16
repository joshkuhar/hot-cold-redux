var React = require('react');
var Guess = require('./guess-box');
var Show = require('./show-guesses');
var Temp = require('./temp-box');
// var data = require('../data');



var Game = React.createClass({
	render: function() {
		return(
			<div>
				<Guess />
				<Show guess="1" />
				<Temp />
			</div>
			);
	}
});

module.exports = Game;