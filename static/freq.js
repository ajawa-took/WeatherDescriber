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
        type: "pie"
     };
     var layout = {
        title: title,
        paper_bgcolor: "tan"
    };
    Plotly.newPlot(divid, [trace], layout);
};

console.log("i am 6");

function bar_chart(data, divid, title){
    var trace = {
        x: data['labels'],
        y: data['values'],
        type: "bar"
    };

    var layout = {
        title: title,
        yaxis: {title: "Fraction of historical days"},
        paper_bgcolor: "tan"
    };

    Plotly.newPlot(divid, [trace], layout);

}
