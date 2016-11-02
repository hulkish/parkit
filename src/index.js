import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from 'containers/app';
import Home from 'containers/home';
import NotFound from 'containers/not-found';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:9000' }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
