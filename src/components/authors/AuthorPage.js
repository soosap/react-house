'use strict';

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorList = require('./AuthorList');
var AuthorApi = require('../../api/authorApi');

var AuthorPage = React.createClass({
	getInitialState: function() {
	  return {
	    authors: []
	  };
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({
				authors: AuthorApi.getAllAuthors()
			});
		}
	},

  render: function() {

		return (
      <div>
				<h1>Authors</h1>
				<Link to="addAuthor" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
			</div>
    );
  }

});

module.exports = AuthorPage;
