# package for building webpage
from flask import Flask, render_template, redirect, url_for
# json package for passing data python->html->js
import json

# our datacleaning functions
import GetCleanData as gcda
# some data already gotten from APIs
# currently just used for the redirect from front page
import preloads


# webpage code
app = Flask(__name__)


# new front page
@app.route('/')
def preloaded():
    # this hack redirects you to a fixed output page (full year, chicago)
    # 
    return render_template("redir.html")


@app.route("/describer/<location>/<start_date_iso>/<end_date_iso>")
def descri(location, start_date_iso, end_date_iso):
    # someday, this will check if the location/daterange is cashed in local db
    # for now, it just checks against the location/daterange from front page
    if (location == "chicago" and ( start_date_iso == "2023-01-01" and end_date_iso == "2023-12-31")):
        datapack = preloads.onepack
    # for a new location/daterange:
    else:
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
            return """The position API couldn't find anywhere matching your request."""
        except:
            return """Congratulations! You found a new bug!
            <br> This url has been logged (just kidding), 
            <br> and developers will get on it right away! (still kidding). \n
            <br> Sorry, there is no prize..."""
    # next line turns json into string in order to pass it to js
    datajason = json.dumps(datapack)
    # pass datapack for html, datajason for js
    return render_template("index.html", datajason=datajason, datapack=datapack)


# magical flask stuff, DO NOT REMOVE!!
if __name__=='__main__':
    app.run(debug=True)


