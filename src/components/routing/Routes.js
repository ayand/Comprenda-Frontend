import React from 'react';
import { Route, Switch } from 'react-router-dom';

import requireAuth from './requireAuth';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import Landing from '../Landing';
import CurrentProfile from '../profile/CurrentProfile';
import CreateProfile from '../profile/CreateProfile';
import EditProfile from '../profile/EditProfile';

const Routes = () => {
    return (
      <div className="container-fluid">
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/dashboard" component={requireAuth(Dashboard)}/>
              <Route exact path="/profile" component={requireAuth(CurrentProfile)}/>
              <Route exact path="/create_profile" component={requireAuth(CreateProfile)}/>
              <Route exact path="/edit_profile" component={requireAuth(EditProfile)}/>
          </Switch>
      </div>
    )
}

export default Routes;
