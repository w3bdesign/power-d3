import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';

function D3Component({ data }) {
  console.log('Props: ');
  //console.log(data.viewer.homes[0].consumption.nodes[0]);
  console.log(data);

  const d3Container = useRef(null);

  useEffect(() => {
    if (data) {
      const svg = d3.select(d3Container.current);

      // Bind D3 data
      const update = svg.append('g').selectAll('text').data(data);

      // Enter new D3 elements
      update
        .enter()
        .append('text')
        .attr('x', (d, i) => i * 25)
        .attr('y', 40)
        .style('font-size', 24)
        .text((d) => d);

      // Update existing D3 elements
      update.attr('x', (d, i) => i * 40).text((d) => d);

      // Remove old D3 elements
      update.exit().remove();
    }
  }, [data]);

  return (
    <svg className="d3-component" width={400} height={200} ref={d3Container} />
  );
}

export default D3Component;
