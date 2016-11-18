var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/dex');

var Temp = React.createClass({
	// reportTemp: function(){
	// 	var guess = this.refs.inputBox.value;
	// 	this.props.dispatch(actions.reportTemp(guess));

	// },
	getWord: function() {
		this.props.dispatch(actions.postAnswer());
	},
	render: function() {
		console.log(this.props);
		return (
			<div>
				<input type="text" ref="inputBox"/>
					<button type="button" onClick={this.getWord}>
						Hit Me
					</button>
				<br/>
				{this.props.tang}
				<br/>

			</div>
			);	
	}
});	

var mapStateToProps = function(state, props) {
    return {
        tang: state.tang,
    };
};

var Container = connect(mapStateToProps)(Temp);

module.exports = Container;	
