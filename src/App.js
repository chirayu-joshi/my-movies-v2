import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './containers/Dashboard/Dashboard';
import PathNotFound from './components/PathNotFound/PathNotFound';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    isLoading: true,
    isSideDrawerOpen: false
  }

  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen }
    });
  }

  backdropClickHandler = () => {
    this.setState({ isSideDrawerOpen: false });
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

    let backdrop = null;
    if (this.state.isSideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <Fragment>
          <Navbar drawerClickHandler={this.drawerToggleHandler} />
          <SideDrawer
            show={this.state.isSideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route render={PathNotFound} />
          </Switch>
      </Fragment>
    );
  }
}

export default App;
