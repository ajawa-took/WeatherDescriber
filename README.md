# Weather Describer

 <a href="http://funwithweather.pythonanywhere.com">Weather Describer</a> provides very rough weather predictions based purely on historical data. User inputs location and a date period, and gets the frequency of basic weather categories (like "hot" or "windy") in past years. 


# Branch readme, edit/delete before merge

 Major front end overhaul mid-february 2023, making the page responsive, and combining input and output into one page.

 In this commit, the new stuff is in the obfuscated "testing" app route, while the old routes contain mostly unchanged code. To access the new version, type location and dates directly into the url:


```
/testing/<location>/<start_date_iso>/<end_date_iso>
```

like

```
testing/chicago/2023-08-01/2023-08-06
```


### Key changes

- button redirects instead of generating a link, with the usual command-line up-directory syntax:
```
location.href = "../../../testing/"+urrl;
```

- out charts are packaged in a flex-container with
```
display: flex;
flex-flow: row wrap;
```
that shuffle responsively, but remain a fixed size.
for comparison, the plots in the old-route output now resize but don't shuffle, which seems worse.

- the key to responsive plots is
```
var config = {responsive: true};
```
and
```
legend: { "orientation": "h" }
```
and not specifying dimensions in plotly js code, but yes specifying dimensions in the css style for the div containing the plot.

- for a uniform look, input fields are now in similar flex-items, floating around te page responsively.

## Next Todo 

- Generate a sample of the data passed to make plots, and hord-code it into the front page, which should be slightly different than the main page: button url redirect won't need ".../", maybe slightly different wording of explanatory text.

## Minor additions/beautification

 - Charts could use beautification, like dropping zeros from pie charts, or rotating them so that the zeros' labels aren't off the page.

 - Colors could use beautification; maybe a non-white overall page background? Non-black text?

 - Explanatory paragraph could use re-writing, and needs restyling, currently super-ugly.

 - Need to add a link to out github, and maybe to us elsewhere?

## Next Steps

 - Add space for season-clusters input and output.

 - Polish season-clusters.
















