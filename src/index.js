import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
/*import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';*/

/*const networkInterface = createNetworkInterface({
    uri: "http://localhost:4000/graphql",
    opts: {
        credentials: 'same-origin'
    }
})

const client = new ApolloClient({
    networkInterface,
    dataIdFromObject: o => o.id
});*/

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include'
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const Root = () => {
    return (
      <ApolloProvider client={client}>
          <Router>
              <App/>
          </Router>
      </ApolloProvider>
    )
}

ReactDOM.render(
    <Root />,
  document.getElementById('root')
);
