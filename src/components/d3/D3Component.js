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

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function D3Component({ tibberData, settibberData }) {
  const consumptionData = tibberData.viewer.homes[0].consumption.nodes;

  const test = consumptionData.forEach((data, index) => {
    //if(data.to) { }
    console.log(data);
    // console.log(data.to);
    return formatDate(data.to);
    //console.log(consumptionData[index].to);
  });
  console.log(test);

  return (
    <div className="App">
      <LineChart width={1000} height={600} data={consumptionData}>
        <Line type="monotone" dataKey="consumption" stroke="#8884d8" />
        <Line type="monotone" dataKey="cost" stroke="#000" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="to" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
}
