
// getting references
var location_field = d3.select("#location");
var start_year_field = d3.select("#start_year_inputid");
var start_month_field = d3.select("#start_month_inputid");
var start_day_field = d3.select("#start_day_inputid");
var end_year_field = d3.select("#end_year_inputid");
var end_month_field = d3.select("#end_month_inputid");
var end_day_field = d3.select("#end_day_inputid");
var the_button = d3.select("#get_links");
var history_link_thing = d3.select("#history-link");
var seasons_link_thing = d3.select("#seasons-link");

// AM: global variables to hold 4 inputs - i'm sure this is kludge
// LL: Adding default values, in case user input is missing.
var location_val = "Paris";
var start_year_val = "2023";
var start_month_val = "01";
var start_day_val = "01";
var end_year_val = "2023";
var end_month_val = "01";
var end_day_val = "02";

// https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
// var getValue = document.getElementById('ddlViewBy').selectedOptions[0].value;
// var getValue_startyear = document.getElementById['start_year_inputid'].selectedOptions[0].value;



// functions linking input fields to their variables
location_field.on("change", function() {
    location_val = d3.event.target.value;
    console.log("location", location_val);
});

start_year_field.on("change", function() {
    start_year_val = d3.event.target.value;
    console.log("start year", start_year_val);
});

start_month_field.on("change", function() {
    start_month_val = d3.event.target.value;
    console.log("start month", start_month_val);
});

start_day_field.on("change", function() {
    start_day_val = d3.event.target.value;
    console.log("start day", start_day_val);
});

end_year_field.on("change", function() {
    end_year_val = d3.event.target.value;
    console.log("end year", end_year_val);
});

end_month_field.on("change", function() {
    end_month_val = d3.event.target.value;
    console.log("end month", end_month_val);
});

end_day_field.on("change", function() {
    end_day_val = d3.event.target.value;
    console.log("end day", end_day_val);
});

// the function that fills urls
the_button.on("click", function() {
    var urrl = location_val + "/" + start_year_val + "-" + start_month_val + "-" + start_day_val + "/" + end_year_val + "-" + end_month_val + "-" + end_day_val;
    location.href = "../../../describer/"+urrl;
});
