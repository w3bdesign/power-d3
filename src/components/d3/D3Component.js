import React, { useEffect } from 'react';

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
  console.log(tibberData);

  const consumptionData = tibberData.viewer.homes[0].consumption.nodes;

  //console.log(consumptionData);

  /*const formattedDate = consumptionData.map((num) => {
    return formatDate(num.to);
  });*/

  /*const test = consumptionData.forEach((data, index) => {
    //if(data.to) { }
    //console.log(index);
    // console.log(data.to);
    //consumptionData[index].to = "test";
    console.log(consumptionData[index].to);
  });*/

  /*useEffect(() => {
    console.log('Render useEffect!');    
    console.log(data.viewer.homes[0].consumption.nodes);
  }, [data]);*/
  // console.log(consumptionData);
  //console.log(formattedDate);

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
