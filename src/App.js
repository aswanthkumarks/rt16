import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';

import NavigationComponent from './components/navigation';
import ProfileComponent from './components/pages/profile';
import DashboardComponent from './components/pages/dashboard';

import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="row">
        <div className="col-md-3"><NavigationComponent></NavigationComponent></div>
        <div className="col-md-9">
          <Route path='/profile' component={ProfileComponent}/>
          <Route path='/dashboard' component={DashboardComponent}/>
        </div>
      </div>
    </div>);
  }
}

export default App;
