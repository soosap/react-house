'use strict';

var React = require('react');
var AuthorList = require('./AuthorList.react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
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
				<AuthorList authors={this.state.authors}/>
			</div>
    );
  }

});

module.exports = Authors;
