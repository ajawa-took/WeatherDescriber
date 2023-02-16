var data = [{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }];
  
  
  var layout = {
    // height: 1500,
    // width: 1500,
    margin: {
        l: 10,
        r: 10,
        b: 10,
        t: 10,
        pad: 0
      },
    legend: {"orientation": "h"}
  };
  
  var config = {responsive: true};
  
  Plotly.newPlot('chartdiv3', data, layout, config);
  Plotly.newPlot('chartdiv4', data, layout, config);
  Plotly.newPlot('chartdiv5', data, layout, config);