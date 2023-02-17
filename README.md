# Weather Describer

 <a href="http://funwithweather.pythonanywhere.com">Weather Describer</a> provides very rough weather predictions based purely on historical data. User inputs location and a date period, and gets the frequency of basic weather categories (like "hot" or "windy") in past years. 


# Branch readme, edit/delete before merge

 Major front end overhaul mid-february 2023, making the page responsive, and combining input and output into one page.


## Todo 

 - <b>Explanatory paragraphs need rewriting.</b>

 - Error handling is acting weird, needs rethink and update.<br>
 For example, I'm getting the generic "new bug" message instead of bad-location, or (locally) no-internet messages. Dates error is still possible with drop-downs like 02/31.

 - Front-page hack should be replaced. Can flask redirect on the level of python instead of rendering an html template that calls js code that redirects? In the long run, maybe front page should be explanatory, with button links to describer and (not yet existing) seasons?

 - Replace dropdowns with real calendar date input forms.

 - Add a flex-item-chart containing a map of the location; plotly? leaflet?

 - Add definitions of weather adjectives: on separate page? at the bottom of the page? as hovertext in charts?



### Minor additions/beautification

 - Charts could use beautification, like dropping zeros (and near-zeros?) from pie charts, or rotating them so that the zeros' labels aren't off the page. Also, remove underscore in "partly_coudy".

 - Colors could use beautification; maybe a non-white overall page background? Non-black text?

 - <b>Explanatory paragraph could use restyling, currently super-ugly.</b>

 - Add a link to our github, and maybe to us elsewhere?



## Next Steps

 - See how our adjective definitions compare to others: ask meteorologists? compare historical days to timeanddate.com ?

 - Season clusters.
	- Polish season-clusters.
	- Add space for season-clusters input and output.
	- Put all together


 - Add a back-end database that stores data for locations and date ranges that have already been querried, to avoid unneeded API calls. 
	- Simplest: if everything matches, no API calls needed at all, get datapack from storage.
	- Make LocationAPI call; if longitude/latitude and daterange match, get datapack from storage.
	- Make LocationAPI call; if longitude/lattitude match, get the dataframe output of
```
get_clean_weather(latitude, longitude, start_year, end_year)
```
from storage, then compute adjective frequencies for the new date range.


 - Take adjective definitions out of the code, into a separate (easily editable) list or dictionary or json or somesuch.










