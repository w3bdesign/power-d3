import React from 'react';

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import CONSUMPTION from './gql/CONSUMPTION';

const authLink = setContext((_, { headers }) => {
  const token = `${process.env.REACT_APP_TOKEN}`;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_URL}`,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

client.query({ query: CONSUMPTION }).then((result) => console.log(result));

function App() {
  return <div className="App"></div>;
}

export default App;
