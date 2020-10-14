// https://medium.com/@varvara.munday/d3-in-react-a-step-by-step-tutorial-cba33ce000ce
// https://www.apollographql.com/docs/react/get-started/

import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/client';

import client from './apollo/apollo';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
