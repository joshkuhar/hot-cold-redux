var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/dex');

var Reply = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.reply.reply}
			</div>
			);
	}
});

var mapStateToProps = function(state, props) {
    return {
        reply: state
    };
};

var Container = connect(mapStateToProps)(Reply);

module.exports = Container;