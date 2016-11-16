var React = require('react');
var Guess = require('./guess-box');
var Show = require('./show-guesses');
var Temp = require('./temp-box');
var data = require('../data');
var connect = require('react-redux').connect;


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

var mapStateToProps = function(state, props) {
    return {
        repositories: state
    };
};

var Container = connect(mapStateToProps)(RepositoryList);

module.exports = Game;

