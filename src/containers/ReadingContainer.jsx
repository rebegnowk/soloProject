import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import CurrentDisplay from '../components/CurrentDisplay.jsx';
import BooksDisplay from '../components/BooksDisplay.jsx';

class ReadingContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('reading container', this.props.booksInfo);
    return (
      <div>
        <p>hi from reading container</p>
        <CurrentDisplay />
        <BooksDisplay booksInfo={this.props.booksInfo} />
      </div>
    );
  }
}
export default withRouter(ReadingContainer);
