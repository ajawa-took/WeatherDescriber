# package for building webpage
from flask import Flask, render_template, redirect, url_for
# json package for passing data python->html->js
import json

# our datacleaning functions
import GetCleanData as gcda


# webpage code
app = Flask(__name__)

# this build the front page
@app.route('/')
def welcome():
    return render_template("front.html")

# route below is outdated, delete soon
# @app.route('/country_codes')
# def country_code_list():
#     return render_template('country_codes.html')

# this displays pretty pie-charts and a barchart - MAIN OUTPUT
@app.route("/pretty/v1.0/history_loc/<location>/<start_date_iso>/<end_date_iso>")
def loc_stats(location, start_date_iso, end_date_iso):
    try:
        datapack = gcda.get_adjective_stats_loc(location, start_date_iso, end_date_iso)
    except gcda.DateFormatBadError:
        return "Your dates are not in ISO format. Please try again :)"
    except gcda.WeatherAPIBadLoadError:
        return ("""Weather API returned bad data. 
        Most common cause is a location at sea, or too close to north or south pole.""")
    except gcda.WeatherAPIBadCallError:
        return "The weather API isn't talking to us :( :( :("
    except gcda.PositionAPIBadCallError:
        return "We can't connect to the position API :( :( :("
    except gcda.PositionAPIBadRequestError:
        return "The position API isn't talking to us :( :( :("
    except gcda.PositionAPIBadLoadError:
        return """The position API couldn't find anywhere matching your request.
        Did you use the correct country ISO code? England isn't UK, Germany isn't GE..."""
    except:
        return """Congratulations! You found a new bug!
        This url has been logged (just kidding), 
        and developers will get on it right away! (still kidding). \n
        Sorry, there is no prize..."""
    # next line turns json into string in order to pass it to js
    datajason = json.dumps(datapack)
    # pass datapack for html, datajason for js
    return render_template("freq.html", datajason=datajason, datapack=datapack)


    



# api routse below are old/broken/irrelevant, or new/broken/unfininshed


@app.route("/api/v1.0/history_latlong/<lattitude>/<longitude>/<start_date_iso>/<end_date_iso>/<years>")
def latlong_stats(lattitude, longitude, start_date_iso, end_date_iso, years=20):
    lattitude = float(lattitude)
    longitude = float(longitude)
    years = int(years)
    return gcda.get_adjective_stats(lattitude, longitude, start_date_iso, end_date_iso, years)

@app.route("/api/v1.0/prettyy/<lattitude>/<longitude>/<start_date_iso>/<end_date_iso>/<years>")
def pretty_stats(lattitude, longitude, start_date_iso, end_date_iso, years=20):
    lattitude = float(lattitude)
    longitude = float(longitude)
    years = int(years)
    return gcda.get_adjective_stats(lattitude, longitude, start_date_iso, end_date_iso, years)
    # weather_dict = gcda.get_adjective_stats(lattitude, longitude, start_date_iso, end_date_iso, years)
    # weather_dict['start'] = start_date_iso
    # weather_dict['end'] = end_date_iso
    # weather_dict['years'] = years
    # return render_template("pretty.html", weather_data = weather_dict)


# magical flask stuff, DO NOT REMOVE!!
if __name__=='__main__':
    app.run(debug=True)


