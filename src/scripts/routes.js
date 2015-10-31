'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require('../components/App')}>
		<DefaultRoute handler={require('../components/home/HomePage')} />
		<Route name="authors" handler={require('../components/authors/AuthorPage')} />
		<Route name="addAuthor" path="author" handler={require('../components/authors/ManageAuthorPage')} />
		<Route name="editAuthor" path="author/:id" handler={require('../components/authors/ManageAuthorPage')} />

		<Route name="about" handler={require('../components/about/AboutPage')} />
		<NotFoundRoute handler={require('../components/errors/NotFoundPage')} />
		<Redirect from="about-us" to="about" /> /*Route has changed since*/
		<Redirect from="apout" to="about" /> /*Catching common typos*/
		<Redirect from="about/*" to="about" /> /*Use wildcards for sub-routes*/
	</Route>
);

module.exports = routes;
