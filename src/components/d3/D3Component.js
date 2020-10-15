// import React, { useEffect, useRef } from 'react';

// import * as d3 from 'd3';

// https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102
// https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/
// https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/

import React, { useEffect } from 'react';
import * as d3 from 'd3';

const createPieChart = async () => {
  const svg = d3.select('svg'),
    width = svg.attr('width'),
    height = svg.attr('height'),
    radius = Math.min(width, height) / 2;

  const g = svg
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  const color = d3.scaleOrdinal(['red', 'blue', 'yellow']);

  const pie = d3.pie().value(function (d) {
    return d.percent;
  });

  const path = d3
    .arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  const label = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius - 200);

  
  const data = await d3.csv('http://localhost:3000/populations.csv');

  const arc = g
    .selectAll('.arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc');

  arc
    .append('path')
    .attr('d', path)
    .attr('fill', function (d) {
      return color(d.data.states);
    });

  arc
    .append('text')
    .attr('transform', function (d) {
      return `translate(${label.centroid(d)})`;
    })
    .text(function (d) {
      return d.data.states;
    });

  svg
    .append('g')
    .attr('transform', `translate(${width / 2 - 120},20)`)
    .append('text')
    .text('Test')
    .attr('class', 'title');
};

export default function D3Component() {
  useEffect(() => {
    createPieChart();
  }, []);

  return (
    <div className="App">
      <style>{`
        .arc text {
          font: 35px arial;
          text-anchor: middle;
          fill: #fff;
          stroke: #000;
        }

        .arc path {
          stroke: #fff;
        }

        .title {
          fill: #fff;
          font-weight: bold;
        }
      `}</style>
      <svg width="700" height="700"></svg>
    </div>
  );
}
