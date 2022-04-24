import React from 'react';
import Plot from 'react-plotly.js';
export function SearchTracking() {
  // const token = React.useContext(TokenContext);
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          marker: { color: 'red' },
        },
      ]}
      layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
    />
  );
}
