var React = require('react');
var Actions = require('../actions/actions');
var AppDispatcher = require('../dispatcher/dispatcher');

var InputView = React.createClass({
	click: function(e) {
		var text = this.refs.text.value.trim();
		this.refs.text.value = '';
		if(text) {
			AppDispatcher.dispatch(Actions.addListItem(text));
		}
	},

	render: function() {
		return (
			<div>
				<input type='text' ref='text' />
				<button type='button' onClick={this.click}>按钮</button>
			</div>
		)
	}
});

module.exports = InputView;