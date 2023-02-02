import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import BookSearch from './components/BookSearch.jsx';

import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSubmit: '',
      userSubmit: '',
      userIn: false,
      booksInfo: [],
    };
    this.userChange = this.userChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
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

  userChange(event) {
    this.setState({
      currentSubmit: event.target.value,
      userIn: true,
    });
  }
  updateUser() {
    this.state.userSubmit === ''
      ? this.setState({
          userSubmit: this.state.currentSubmit,
        })
      : this.setState({
          userSubmit: '',
        });
    // console.log('lets verisy');
    // fetch(`/api/verifyUser/${this.state.currentSubmit}`)
    //   .then((res) => res.json)
    //   .then((res) => {
    //     if (res) {
    //       this.state.userSubmit === ''
    //         ? this.setState({
    //             userSubmit: this.state.currentSubmit,
    //           })
    //         : this.setState({
    //             userSubmit: '',
    //           });
    //     }
    //   })
    //   .catch((err) => console.log('cannot verify user'));
  }
  render() {
    // const { booksInfo } = this.state;
    // console.log('app render', booksInfo);
    console.log('hello');
    return (
      <div className='router'>
        <main>
          <h1>LET'S READ, {this.state.userSubmit.toUpperCase()}</h1>
          <Link to='/bookSearch'>
            <button type='button' className='customBookButton secondaryButton'>
              Add Book
            </button>
          </Link>
          <Switch>
            <Route exact path='/'>
              <form>
                <label for='userName'>Who are you?</label>
                <br></br>
                <input
                  type='text'
                  id='userName'
                  value={this.state.currentUser}
                  onChange={this.userChange}
                ></input>
                <Link to='/urIn'>
                  <button
                    type='button'
                    className='signInButton secondaryButton'
                    onClick={this.updateUser}
                  >
                    isMe
                  </button>
                </Link>
              </form>
            </Route>
            <Route exact path='/urIn'>
              <MainContainer
                currentUser={this.state.userSubmit}
                updateUser={this.updateUser}
              />
            </Route>
            <Route exact path='/bookSearch'>
              <BookSearch
                booksInfo={this.state.booksInfo}
                currentUser={this.state.userSubmit}
              />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

// render(<App />, document.querySelector('#root'));
export default App;
