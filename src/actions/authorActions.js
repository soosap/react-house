'use strict';

var Dispatcher = require('../dispatcher/dispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
	createAuthor: function (author) {
		var newAuthor = AuthorApi.saveAuthor(author);

		/*Hey dispatcher, go tell all the stores that care that an author was just created.*/
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});

	},

	updateAuthor: function (author) {
		var updatedAuthor = AuthorApi.saveAuthor(author);

		/*Hey dispatcher, go tell all the stores that care that an author instance was just updated.*/
		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		});

	},

	deleteAuthor: function (id) {
		AuthorApi.deleteAuthor(id);

		// Here in an asynchronous call to the database I could fire a DELETE_AUTHOR, and in the callback of a promise
		// API I could then dispatch DELETED_AUTHOR. In the meanwhile I could show something like a loader...
		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		});
	}
};

module.exports = AuthorActions;
