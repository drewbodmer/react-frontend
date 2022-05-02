import React from 'react';
import Plot from 'react-plotly.js';
import searches from '../../data/predictions.json';

export function SearchTracking() {
  const wikiClasses = [
    "Computer hardware",
    "Internet",
    "Software",
    "Games",
    "Entertainment",
    "Science",
    "Technology",
    "Law",
    "Politics",
    "Books",
    "Investment",
    "Food and drink",
    "Health",
    "Animals",
  ]

  const wikiClassIndexes = Object.assign({}, ...wikiClasses.map((i, w) => {
    return { [i]: w };
  }));
  // const wikiClassColors = Object.assign({}, ...wikiClasses.map((i, w) => {
  //   return { [i]: (`hsl(${(w * 24) % 360},${Math.max((w * 105 + 50) % 100, 50)},${Math.max((w * 105 + 50) % 100, 50)})`) };
  // }));
  function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }
  const dateVals = searches.map((entry) => {
    const timestamp = parseInt(entry['last_visit_date']) / 1000;
    const date = new Date(timestamp);
    if (isValidDate(date)) {
      const dateString = date.toISOString().split('T')[0]
      return dateString;
    }

  }).filter((d) => d !== "Invalid Date NaN");

  console.log(dateVals.length);
  const dedup = [...new Set(dateVals)];
  console.log(dedup);


  const searchMatrix = new Array(wikiClasses.length).fill(0).map(() => new Array(searches.length).fill(0));

  searches.forEach((entry, index) => {
    const classLength = wikiClasses.length;
    entry['classification']['labels'].filter((l) => wikiClasses.includes(l)).forEach((klass, i) => {
      searchMatrix[wikiClassIndexes[klass]][index] = classLength - i;
    });
  });

  const traces = wikiClasses.map((wikiClass) => {
    let trace = {
      x: dateVals,
      y: searchMatrix[wikiClassIndexes[wikiClass]],
      stackgroup: 'one',
      name: wikiClass,
      line: {
        // color: wikiClassColors[wikiClass],
        width: 0
      }
    };
    return trace;
  });

  return (
    <Plot
      data={
        traces
      }
      layout={{ width: "80vw", height: "80vh", title: 'A Fancy Plot' }}
    />
  );
}
