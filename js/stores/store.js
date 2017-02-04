var EventEmitter = require('events').EventEmitter;

var Store = Object.assign({}, EventEmitter.prototype, {
	items: [],

	getAll: function() {
		return this.items;
	},

	addItem: function(text) {
		this.items.push(text);
	},

	addItemsChangeListener: function(callback) {
		this.on('change', callback);
	},

	removeItemsChangeListener: function() {
		this.removeListener('change');
	},

	emitChange: function() {
		this.emit('change');
	}
})

module.exports = Store;