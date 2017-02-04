module.exports = {
	addListItem: function(text) {
		return {
			type: 'ADD_LISTITEM',
			text: text
		}
	}
}