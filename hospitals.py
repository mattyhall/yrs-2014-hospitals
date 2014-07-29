from flask import render_template
import json
from models import db, app, Place

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/allplaces")
def allplaces():
    places = Place.query.all()
    places = [{'id': place.id, 'name': place.name, 'tel': place.telephone, 
               'street': place.street, 'locality': place.locality, 'region': place.region, 
               'postcode': place.postcode, 'lat': place.lat, 'lng': place.lng} for place in places]
    places_json = json.dumps(places)
    return places_json

app.run(debug=True)
