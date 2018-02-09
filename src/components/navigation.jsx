
import React from 'react';
import { Link } from 'react-router-dom';

export default class NavigationComponent extends React.Component {

  render() {
    return (
      <React.Fragment>
        <li><Link to={`/profile`}>My Profile</Link></li>
        <li><Link to={`/dashboard`}>Dashboard</Link></li>
        <li><Link to={`/dashboard/users`}>users</Link></li>
      </React.Fragment>
    )
  }
}
