import React from 'react';
import { useQuery } from '@apollo/client';

import CONSUMPTION_QUERY from './gql/CONSUMPTION_QUERY';

import D3Component from './components/d3/D3Component';

function App() {
  const { loading, error, data } = useQuery(CONSUMPTION_QUERY);

  if (data) {
    console.log(data.viewer.homes[0].consumption.nodes[0]);
  }

  return (
    <div className="App">
      {loading && <h1>Loading data ...</h1>}
      {error && <h1>Error loading data ...</h1>}
      {data ? <D3Component data={data} /> : <h2>No data </h2>}
    </div>
  );
}

export default App;
