'use strict';

var React = require('react');

var AboutPage = React.createClass({
	statics: {
		/*
		 |--------------------------------------------------------------------------
		 | willTransitionTo()
		 |--------------------------------------------------------------------------
		 |
		 | Hook that allows to opt in before you are redirected to the desired
		 | page. This is useful to implement user authentication logic.
		 |
		*/
		//willTransitionTo: function (transition, params, query, callback) {
		//	if (!confirm('Are you sure you want to be redirected to that page?')) {
		//		transition.abort();
		//	} else {
		//		callback(); /*Allows the transition to actually occur*/
		//	}
		//},

		/*
		 |--------------------------------------------------------------------------
		 | willTransitionFrom()
		 |--------------------------------------------------------------------------
		 |
		 | Hook that allows to opt in before leaving the current page in a redirect
		 | call. This is useful to add "Are you sure"-logic to prevent the
		 | user from accidentally losing not yet submitted data.
		 |
		*/
		//willTransitionFrom: function (transition, component) {
		//	if (!confirm('Are you sure you want to leave a page that is so cool?')) {
		//		transition.abort();
		//	}
		//}
	},

	render: function () {
	 return (
		 <div>
			 <h1>About</h1>
			 <p>
				 This application uses the following technologies:
				 <ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node.js</li>
						<li>Gulp</li>
						<li>Webpack</li>
						<li>Bootstrap</li>
						<li>Sass</li>
				 </ul>
			 </p>
		 </div>
	 );
	}
});

module.exports = AboutPage;
