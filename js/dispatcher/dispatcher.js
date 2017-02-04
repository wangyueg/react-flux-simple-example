var Dispatcher = require('flux').Dispatcher;
var Store = require('../stores/store');

var AppDispatcher = new Dispatcher();

AppDispatcher.register(function(action) {
	switch(action.type) {
		case 'ADD_LISTITEM':
			Store.addItem(action.text);
			Store.emitChange();
	}
});

module.exports = AppDispatcher;