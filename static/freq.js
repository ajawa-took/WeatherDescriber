var cat = 17;


// temperature chart. work needed:
// 1. set legend to go in order hot to freezing
// 2. set hovers to only show label, percent; not value

function temp_chart(temp_data, divid, title, colors){
    var trace = {
        labels: temp_data['labels'],
        values: temp_data['values'],
        'marker': {
        colors: colors},
        type: "pie",
        hoverinfo: 'label+percent',
        textinfo: "label",
     };
     var layout = {
        title: title,
        paper_bgcolor: "tan",
        margin: {
            l: 10,
            r: 10,
            b: 10,
            t: 50,
            pad: 10
          },
        legend: {
            "orientation": "h",
            font: {size: 16},
        }
    };
    var config = {responsive: true};
    Plotly.newPlot(divid, [trace], layout, config);
};

function bar_chart(data, divid, title){
    var trace = {
        x: data['labels'],
        y: data['values'],
        type: "bar"
    };

    var layout = {
        title: title,
        yaxis: {
            title: "Fraction of historical days", 
            range: [0, 1],
            tickformat: ".0%"
        },
        paper_bgcolor: "tan"
    };

    var config = {responsive: true};

    Plotly.newPlot(divid, [trace], layout, config);

}
