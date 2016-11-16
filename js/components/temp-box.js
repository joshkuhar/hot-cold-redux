var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/dex');

var Temp = React.createClass({
	reportTemp: function(){
		this.props.dispatch(actions.reportTemp('Wu Tang Clan'));
	},
	render: function() {
		console.log(this.props);
		return (
			<div><button type="button" onClick={this.reportTemp}>Click Me</button>
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