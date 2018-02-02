import React from 'react';
import { Route } from 'react-router-dom';
import UserComponent from './users';

const DashboardComponent = () => (
  <div>
    <h3>Dashboard</h3>
    <div>
      <Route path='/dashboard/users' component={UserComponent}/>
    </div>
  </div>
);

export default DashboardComponent;
