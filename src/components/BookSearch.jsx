import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookSearch extends Component {
  render() {
    return (
      <div className='customBookContainer'>
        <h3>Add a book!</h3>
        <Link to='/'>
          <button type='button' className='secondaryButton'>
            Back to homepage.
          </button>
        </Link>
      </div>
    );
  }
}
export default withRouter(BookSearch);
