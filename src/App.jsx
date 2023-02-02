import React, { Component } from 'react';
import { render } from 'react-dom';
// import { Routes, Route } from 'react-router-dom';

import MainContainer from './containers/MainContainer.jsx';

import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>hoifrom react</p>
        <MainContainer />
      </div>
    );
  }
}

// render(<App />, document.querySelector('#root'));
export default App;
