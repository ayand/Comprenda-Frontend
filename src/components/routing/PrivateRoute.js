import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import query from '../../queries/CurrentUser';
import { graphql } from 'react-apollo';

const PrivateRoute = ({
    component,
    data,
    ...rest
}) => (
    <Route
      {...rest}
      render={() => {
            console.log(data);
            if (data.loading) {
                return <div>Loading</div>
            }
            if (!data.currentUser) {
                return <Redirect to='/'/>
            }
            return <Component {...rest}/>
        }
      }
      />
)
/*class PrivateRoute extends Component {
    render() {
        const { component, data, ...rest } = this.props;
        return (
          <Route
            {...rest}
            render={() => {
                  console.log(data);
                  if (data.loading) {
                      return <div>Loading</div>
                  }
                  if (!data.currentUser) {
                      return <Redirect to='/'/>
                  }
                  return <Component {...rest}/>
              }
            }
            />
        )
    }
}*/

export default graphql(query)(PrivateRoute)
