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
  //return new Date(dateString).toLocaleDateString('nb-NO', options);
};

export default function D3Component({ data }) {
  const consumptionData = data.viewer.homes[0].consumption.nodes;

  const formattedDate = consumptionData.map((num) => {
    return formatDate(num.to);
    //console.log(num.to);
    //return num * 2;
  });

  console.log(formattedDate);

  /*const formattedForEach = consumptionData.forEach(
    (test) => {
      console.log(test);
      if (test === 'to') {
        console.log('toooo');
      }
    }*/

  //console.log(formatDate(test))
  //console.log(test)
  //if(Object.keys(test))
  //console.log(Object.keys(test))

  /*{
        if (Object.keys(test) === "to") {
          console.log('To!');
        }
      }*/

  //Object.keys(test) === 'to' && console.log('To!')
  // );

  /*useEffect(() => {
    console.log('Render useEffect!');    
    console.log(data.viewer.homes[0].consumption.nodes);
  }, [data]);*/
  // console.log(consumptionData);
  //console.log(formattedDate);

  return (
    <div className="App">
      <LineChart width={600} height={600} data={consumptionData}>
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
