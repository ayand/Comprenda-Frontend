import React from 'react';
//import Header from './Header';
import { Route, Switch } from 'react-router-dom';

import Header from './header/Header';
import Routes from './routing/Routes';

export default ({ children }) => {
    return (
      <div>
          <Header/>
          <Switch>
              <Route component={Routes}/>
          </Switch>
      </div>

    )
}
