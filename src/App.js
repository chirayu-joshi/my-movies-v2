import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './containers/Dashboard/Dashboard';
import PathNotFound from './components/PathNotFound/PathNotFound';

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
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route render={PathNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
