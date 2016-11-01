import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './containers/app';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:9000' }),
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
//
