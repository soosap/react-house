'use strict';

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./AuthorForm');
var AuthorApi = require('../../api/authorApi');

var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	statics: {
		willTransitionFrom: function (transition, component) {
			if (component.state.dirty && !confirm('Leave without saving?')) {
				transition.abort();
			}
		}
	},

	getInitialState: function() {
	  return {
	    author: {
				id: '',
				firstName: '',
				lastName: ''
			},
			errors: {},
			dirty: false
	  };
	},

	componentWillMount: function() {
	  /*setState in this lifecycle hook will not cause the component to re-render.*/
		var authorId = this.props.params.id; /*from the path /author/:id */

		if (authorId) {
			this.setState({
			  author: AuthorApi.getAuthorById(authorId)
			});
		}
	},

	/*Called for every single key press*/
	setAuthorState: function (event) {
		this.setState({
		  dirty: true
		});
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({
		  author: this.state.author
		});
	},

	authorFormIsValid: function () {
		var formIsValid = true;
		/*Clear any previous issues*/
		this.state.errors = {};

		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = 'First name must be at least three characters';
			formIsValid = false;
		}

		if (this.state.author.lastName.length < 3) {
			this.state.errors.lastName = 'Last name must be at least three characters';
			formIsValid = false;
		}

		this.setState({
		  errors: this.state.errors
		});

		return formIsValid;
	},

	saveAuthor: function (event) {
		/*Prevent default browser behavior. Let react do the work.*/
		event.preventDefault();

		if (!this.authorFormIsValid()) {
			return;
		}

		AuthorApi.saveAuthor(this.state.author);
		this.setState({
		  dirty: false
		});

		toastr.success('Author saved.');
		this.transitionTo('authors');
	},

  render: function() {
    return (
			<div>
				<h1>Manage Author</h1>
				<AuthorForm
					author={this.state.author}
					errors={this.state.errors}
					onChange={this.setAuthorState}
					onSave={this.saveAuthor}
				/>
			</div>
    );
  }

});

module.exports = ManageAuthorPage;
