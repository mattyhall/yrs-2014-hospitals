from flask import render_template, request
import json
from models import db, app, Place
import requests

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/getplaces")
def get_places():
    places = Place.query.order_by(Place.name).all();
    places = [{'id': place.id, 'name': place.name, 'tel': place.telephone, 
               'street': place.street, 'locality': place.locality, 'region': place.region, 
               'postcode': place.postcode, 'lat': place.lat, 'lng': place.lng} for place in places]
    places_json = json.dumps(places)
    return places_json

@app.route('/placelocation')
def place_location():
    q = request.args.get('q', None)
    r = requests.get('http://api.geonames.org/search', params={'q': q, 
        'username': 'mattyhall', 'type': 'json'})
    loc_json = r.json()
    return json.dumps(loc_json['geonames'][0])

app.run(debug=True)
