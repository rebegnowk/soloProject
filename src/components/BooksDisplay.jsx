import React, { Component } from 'react';
import Book from './Book.jsx';

class ReadingDisplay extends Component {
  deleteBook() {
    //access db and delete this instance of book
    console.log('pew');
  }

  render() {
    // console.log(this.props.books);
    const books = [];
    this.props.books.forEach((element) => {
      books.push(<Book info={element} delete={this.deleteBook} />);
    });
    return (
      <div>
        <p>reading books display</p>
        <ul>{books}</ul>
      </div>
    );
  }
}

export default ReadingDisplay;
