// var temp_labels = ['freezing', 'cold', 'warm', 'hot'];
// var temp_values = [0.2, 0.3, 0.4, 0.1];

function makeplot(){
    var temp_labels = ['freezing', 'cold', 'warm', 'hot'];
    var temp_values = [0.2, 0.3, 0.4, 0.1];
    var trace = {
        labels: temp_labels,
        values: temp_values,
        'marker': {
            colors: ['aqua', 'darksteelblue', 'gold', 'red']},
        type: "pie"
    };

    var layout = {
        title: "Historical days by temperature",
        paper_bgcolor: "tan"
    };

    Plotly.newPlot("temp-chart", [trace], layout);
};