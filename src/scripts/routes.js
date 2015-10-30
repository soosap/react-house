'use strict';

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={require('../components/App.react')}>
		<DefaultRoute handler={require('../components/home/Home.react.js')} />
		<Route name="authors" handler={require('../components/authors/Authors.react')} />
		<Route name="about" handler={require('../components/about/About.react')} />
	</Route>
);

module.exports = routes;
