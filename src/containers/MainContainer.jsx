import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';

import BookSearch from '../components/BookSearch.jsx';
import ReadingContainer from './ReadingContainer.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksInfo: [],
    };
  }

  componentDidMount() {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => {
        console.log('didmount', res); // returns an arr of isbn obj
        this.addBooks(res);
      })
      .catch((err) => console.log('App.componenetDid Mount: get books : wrr'));
  }

  addBooks(isbnArr) {
    this.setState({ booksInfo: isbnArr });
  }
  render() {
    const { booksInfo } = this.state;
    // console.log('main render', booksInfo);
    return (
      <div className='mainContainer'>
        <p>hi from main container</p>
        <BookSearch />
        <ReadingContainer books={booksInfo} />
      </div>
    );
  }
}

export default MainContainer;
