import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import Index from './components/Index/index'
import Users from './components/Users/index'

class App extends Component {
  render() {
    return (
          <Switch>
            <Route path="/index" exact component={Index} />
            <Route path="/users" exact component={Users} />
          </Switch>
    );
  }
}

export default App;