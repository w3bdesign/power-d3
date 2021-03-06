import React from 'react';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

export default function D3Component({ tibberData, settibberData }) {
  const consumptionData = tibberData.viewer.homes[0].consumption.nodes;

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const roundValue = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${formatDate(label)}`}</p>
          <p className="label">{`${Math.floor(payload[0].value)} kWh`}</p>
          <p className="label">{`${Math.floor(payload[1].value)} KR`}</p>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <LineChart width={1000} height={600} data={consumptionData}>
        <Line type="monotone" dataKey="consumption" stroke="#8884d8" />
        <Line type="monotone" dataKey="cost" stroke="#000" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="from" tickFormatter={formatDate} />
        <YAxis />
        <Tooltip content={roundValue} labelFormatter={formatDate} />
        <Legend />
      </LineChart>
    </div>
  );
}
