import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Book from './Book.jsx';

class BooksDisplay extends Component {
  deleteBook() {
    //access db and delete this instance of book
    console.log('pew');
  }

  render() {
    // console.log(this.props.books);
    const books = [];
    this.props.booksInfo.forEach((element) => {
      books.push(<Book info={element} delete={this.deleteBook} />);
    });
    return (
      <div className='booksDisplay'>
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BooksDisplay;
