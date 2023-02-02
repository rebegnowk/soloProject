import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route, Link } from 'react-router-dom';

import BookSearch from './components/BookSearch.jsx';
import ReadingContainer from './containers/ReadingContainer.jsx';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksInfo: [],
      currentUser: 'rebe',
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
    console.log('app render', booksInfo);
    return (
      <div className='router'>
        <main>
          <h1>LET'S READ, {this.state.currentUser.toUpperCase()}</h1>
          <Switch>
            <Route path='/bookSearch'>
              <BookSearch />
            </Route>
            <Route path='/'>
              <ReadingContainer booksInfo={booksInfo} />
            </Route>
          </Switch>
          <Link to='/bookSearch'>
            <button type='button' className='customBookButton secondaryButton'>
              Add Book
            </button>
          </Link>
        </main>
      </div>
    );
  }
}

// render(<App />, document.querySelector('#root'));
export default App;
