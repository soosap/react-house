'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./scripts/routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

/*
 |--------------------------------------------------------------------------
 | React-Router
 |--------------------------------------------------------------------------
 |
 | This is where we spin up the react-router using our 'routes'.
 | Note that we pass is 'Router.HistoryLocation' as a second
 | optional argument to replace the default 'HashLocation'.
 | 'HistoryLocation' is also required if running react
 | on the server (isomorphic rendering).
 |
*/
Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler />, document.getElementById('app'));
});
