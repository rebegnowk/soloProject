import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BooksDisplay from '../components/BooksDisplay.jsx';
import CurrentDisplay from '../components/CurrentDisplay.jsx';

class ReadingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readingList: [],
      currentBook: {},
    };
  }
  //fetch reading list
  componentDidMount() {
    fetch(`/api/readingList/${this.props.currentUser}`)
      .then((res) => res.json())
      .then((result) => {
        console.log('GOT THE READING LIST IN REACT', result);
        this.setState({
          readingList: result,
        });
      });
  }
  render() {
    console.log('reading container', this.props.booksInfo);
    return (
      <div>
        <p>hi from reading container</p>
        <CurrentDisplay />
        <BooksDisplay booksInfo={this.state.readingList} />
      </div>
    );
  }
}
export default withRouter(ReadingContainer);
