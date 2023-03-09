import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <section>
        <Switch>
          <Route path="/wallet" component={ Wallet } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </section>
    );
  }
}

export default connect(null)(App);
