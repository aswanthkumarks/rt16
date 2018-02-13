import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';

import NavigationComponent from './components/navigation';
import ProfileComponent from './components/pages/profile';
import DashboardComponent from './components/pages/dashboard';
import ApiComponent from './components/pages/api';

import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <div id="rt-header"></div>
        <img src="/tf.jpg" className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="row">
        <div className="col-md-3">
          <ul>
            <NavigationComponent></NavigationComponent>
          </ul>
        </div>
        <div className="col-md-9">
          <Route path='/profile' component={ProfileComponent}/>
          <Route path='/dashboard' component={DashboardComponent}/>
          <Route path='/fetchapi' component={ApiComponent} />
        </div>
      </div>
    </div>);
  }
}

export default App;
