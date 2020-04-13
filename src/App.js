import React, { Component } from 'react';

import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';

class App extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <LoadingAnimation />
      );
    }

    return (
      <h1>App.js</h1>
    );
  }
}

export default App;
