'use strict';

var Dispatcher = require('../dispatcher/dispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
	initApp: function () {

		/* Hey dispatcher, go tell all the stores that care that the app's initial data is now available. */
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: AuthorApi.getAllAuthors()
			}
		});
	}
};

module.exports = InitializeActions;
