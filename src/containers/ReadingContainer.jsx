import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';

import CurrentDisplay from '../components/CurrentDisplay.jsx';
import BooksDisplay from '../components/BooksDisplay.jsx';

class ReadingContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('reading container', this.props.books);
    return (
      <div>
        <p>hi from reading container</p>
        <CurrentDisplay />
        <BooksDisplay books={this.props.books} />
      </div>
    );
  }
}
export default ReadingContainer;
