var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/dex');

var Temp = React.createClass({
	reportTemp: function(){
		var guess = this.refs.inputBox.value;
		this.props.dispatch(actions.reportTemp(guess));
	},
	render: function() {
		console.log(this.props);
		return (
			<div>
				<input type="text" ref="inputBox"/>
					<button type="button" onClick={this.reportTemp}>
						Click Me
					</button><br/>
				{this.props.foo.wu}
			</div>
			);
	}
});	

var mapStateToProps = function(state, props) {
    return {
        foo: state
    };
};

var Container = connect(mapStateToProps)(Temp);

module.exports = Container;	
