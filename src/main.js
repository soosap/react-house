'use strict';

$ = jQuery = require('jquery');
var React = require('react');

var Home = require('./components/Home.react.js');
var About = require('./components/about/About.react.js');
var Header = require('./components/common/Header.react.js');
var Authors = require('./components/authors/Authors.react');

var App = React.createClass({

  render: function() {
		var Child;

		switch(this.props.route) {
			case 'about': Child = About; break;
			case 'authors': Child = Authors; break;
			default: Child = Home;
		}

    return (
			<div>
				<Header />
				<Child />
			</div>
    );
  }

});

function render() {
	var route = window.location.hash.substr(1);
	React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();

React.render(<App />, document.getElementById('app'));
