var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/dex');

var Temp = React.createClass({
	getGuesses: function() {
		this.props.dispatch(actions.fetchScores());
	},
	render: function() {
		return (
			<div>
					<button type="button" onClick={this.getGuesses}>
						Get Guesses
					</button>
				<br/>
			
				<br/>

			</div>
			);	
	}
});	

var Container = connect()(Temp);

module.exports = Container;	
