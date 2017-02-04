var React = require('react');
var ReactDOM = require('react-dom');
var InputView = require('./views/inputView');
var ListView = require('./views/ListView');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<InputView />
				<ListView />
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app'));