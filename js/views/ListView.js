var React = require('react');
var Store = require('../stores/store');

var ListView = React.createClass({
	getInitialState: function() {
		return {
			items: Store.getAll()
		}
	},

	_itemsChange: function() {
		this.setState({
			items: Store.getAll()
		})
	},

	componentDidMount: function() {
		//添加一个items变化的监听器
		Store.addItemsChangeListener(this._itemsChange);
	},

	componentWillUnmount: function() {
		Store.removeItemsChangeListener();
	},

	render: function() {
		return (
			<ul>
				{this.state.items.map(function(item, index) {
					return <li key={item + '-' + index}>{item}</li>
				})}
			</ul>
		);
	}
});

module.exports = ListView;