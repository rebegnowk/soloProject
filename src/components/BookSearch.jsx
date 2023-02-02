import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BooksDisplay from './BooksDisplay.jsx';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: '',
      title: '',
      author: '',
      series: '',
      year: '',
      pages: '',
      genre: '',
    };
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateValue(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  async handleSubmit(event) {
    const { isbn, title, author, series, year, pages, genre } = this.state;
    const data = {
      isbn,
      title,
      author,
      year,
      series,
      pages,
      genre,
      user: this.props.currentUser,
    };
    await fetch('/api/newBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((result) => console.log('new book response:', result))
      .catch((err) => console.log('error when adding new book', err));

    // await window.location.reload();
  }
  render() {
    return (
      <div>
        <Link to='/urIn'>
          <button type='button' className='secondaryButton'>
            Back to homepage.
          </button>
        </Link>
        <h3>Add a book!</h3>
        <div className='customBookContainer'>
          <form className='book-form'>
            <label for='isbn'>
              ISBN :
              <input
                type='text'
                id='isbn'
                value={this.state.isbn}
                onChange={(event) => this.updateValue('isbn', event)}
              ></input>
            </label>
            <label for='title'>
              Title :
              <input
                type='text'
                id='title'
                value={this.state.title}
                onChange={(event) => this.updateValue('title', event)}
              ></input>
            </label>
            <label for='author'>
              Author :
              <input
                type='text'
                id='author'
                value={this.state.author}
                onChange={(event) => this.updateValue('author', event)}
              ></input>
            </label>
            <label for='series'>
              series ('na' if none):
              <input
                type='text'
                id='series'
                value={this.state.series}
                onChange={(event) => this.updateValue('series', event)}
              ></input>
            </label>
            <label for='year'>
              Year :
              <input
                type='text'
                id='year'
                value={this.state.year}
                onChange={(event) => this.updateValue('year', event)}
              ></input>
            </label>
            <label for='pages'>
              Pages :
              <input
                type='text'
                id='pages'
                value={this.state.pages}
                onChange={(event) => this.updateValue('pages', event)}
              ></input>
            </label>
            <label for='genre'>
              Genre :
              <input
                type='text'
                id='genre'
                value={this.state.genre}
                onChange={(event) => this.updateValue('genre', event)}
              ></input>
            </label>
            <button
              type='submit'
              onClick={(event) => {
                event.preventDefault();
                this.handleSubmit(event);
              }}
              className='secondaryButton'
            >
              Submit
            </button>
          </form>
        </div>
        <h3>All Books</h3>
        <BooksDisplay booksInfo={this.props.booksInfo} />
      </div>
    );
  }
}
export default withRouter(BookSearch);
