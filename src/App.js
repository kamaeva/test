import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import Users from './containers/users'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/users" exact component={Users} />
      </Switch>
    );
  }
}

export default App;
