from flask import render_template, request
import json
from models import db, app, Place, Rating
import requests

@app.route("/")
def index():
    # all the clever stuff is done by JS on this page, so we dob't have to
    # feed any data in
    return render_template('index.html')

@app.route("/getplaces")
def get_places():
    '''Get all the places we have in the database'''

    places = Place.query.order_by(Place.name).all();
    # we need to convert each place to json so that javascript can consume it
    # easily. To do this we must use python's basic types so we will convert
    # each place into a dictionary. We could probably have done a hack with
    # __dict__ but readability is more important that number of lines!
    places = [{'id': place.id, 'name': place.name, 'tel': place.telephone, 
               'street': place.street, 'locality': place.locality,
               'region': place.region, 'postcode': place.postcode, 
               'lat': place.lat, 'lng': place.lng,
               'rating': place.average_rating()}
              for place in places]
    places_json = json.dumps(places)
    return places_json

@app.route('/placelocation')
def place_location():
    ''' 
    Get the location (latitude, longitude) of some text. We query geocodes
    to get the information, take the first match and return the latitude
    '''

    q = request.args.get('q', None)
    r = requests.get('http://api.geonames.org/search', params={'q': q, 
        'username': 'mattyhall', 'type': 'json'})
    loc_json = r.json()
    # each result is in the geonames array. Grab the first and return it
    return json.dumps(loc_json['geonames'][0])

@app.route('/place/<id>')
def place(id):
    '''Get the information for a place'''
    # Here we do pass some information to the template. Grabbing all of the data
    # through javascript would be a bit more difficult
    place = Place.query.filter_by(id=id).first()
    rating = Rating.query.filter_by(place=place).first()
    return render_template('place.html', place=place, rating=rating)

if __name__ == '__main__':
    app.run(debug=True)
