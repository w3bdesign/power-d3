import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import CONSUMPTION_QUERY from './gql/CONSUMPTION_QUERY';

import D3Component from './components/d3/D3Component';

function App() {
  const { loading, error, data } = useQuery(CONSUMPTION_QUERY);

  const [tibberData, settibberData] = useState();

  useEffect(() => {
    if (data) {
      settibberData(data);
    }
  }, [data]);

  return (
    <>
      {loading && <h1>Loading data ...</h1>}
      {error && <h1>Error loading data ...</h1>}
      {tibberData ? (
        <D3Component tibberData={tibberData} settibberData={settibberData} />
      ) : (
        <h2>No data </h2>
      )}
    </>
  );
}

export default App;
