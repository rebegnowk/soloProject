import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import BookSearch from '../components/BookSearch.jsx';
import ReadingContainer from './ReadingContainer.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('main render', booksInfo);
    return (
      <div className='mainContainer'>
        <p>hi from main container</p>
        <Switch>
          <Route path='/'>
            <ReadingContainer currentUser={this.props.currentUser} />
          </Route>
        </Switch>
        <Link to='/'>
          <button type='button' onClick={this.props.updateUser}>
            Change Users
          </button>
        </Link>
      </div>
    );
  }
}

export default MainContainer;
