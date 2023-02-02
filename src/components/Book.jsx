import React, { Component } from 'react';

class Book extends Component {
  render() {
    console.log('book info', this.props.info);
    const { title, author } = this.props.info;
    return (
      <li>
        <div className='book'>
          {/* <p>Bookieei</p> */}
          <span>
            {title} by {author}
          </span>
          <button type='button' onClick={this.props.delete}>
            hoi
          </button>
        </div>
      </li>
    );
  }
}
export default Book;
