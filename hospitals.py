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
    places = [place.to_dict() for place in places]
    places_json = json.dumps(places)
    return places_json

@app.route('/placelocation')
def place_location():
    ''' 
    Get the location (latitude, longitude) of some text. We query geocodes
    to get the information, take the first match and return the coords. If this
    fails we search the place database
    '''

    q = request.args.get('q', None)
    r = requests.get('http://api.geonames.org/search', params={'q': q, 
        'username': 'mattyhall', 'type': 'json', 'country': 'GB'})
    loc_json = r.json()
    if len(loc_json['geonames']) > 0:
        # each result is in the geonames array. Grab the first
        res = loc_json['geonames'][0]
        # if we got a result add a status so the client knows we succeeded
        res['status'] = 'ok'
        return json.dumps(res)
    else:
        # if we didn't get a result search the places
        place = Place.query.filter(Place.name.like(q)).first()
        if place is None:
            return json.dumps({'status': 'error'})
        return json.dumps({'lat': place.lat, 'lng': place.lng, 'status': 'ok'})

@app.route('/place/<id>')
def place(id):
    '''Get the information for a place'''
    # Here we do pass some information to the template. Grabbing all of the data
    # through javascript would be a bit more difficult
    place = Place.query.filter_by(id=id).first()
    rating = Rating.query.filter_by(place=place).first()
    return render_template('place.html', place=place, rating=rating)

@app.route('/compare', methods=['POST'])
def compare():
    place_ids = [v for k, v in request.form.items() if k.startswith('place')]
    places = [Place.query.filter_by(id=id).first() for id in place_ids]
    rows = {'names': [], 'info': [], 'cleanliness': [], 'staff': [],
        'dignity': [], 'involved': []}
    for place in places:
        rows['names'].append(place.name)
        rows['info'].append(place.to_dict())
        rating = Rating.query.filter_by(place=place).first()
        rows['cleanliness'].append({'id': place.id,
            'cleanliness': rating.cleanliness})
        rows['staff'].append({'id': place.id,
            'staff': rating.staff_worked_well})
        rows['dignity'].append({'id': place.id,
            'dignity': rating.dignity_respect})
        rows['involved'].append({'id': place.id,
            'involved': rating.involved_with_decision})
    return render_template('compare.html', rows=rows)

if __name__ == '__main__':
    app.run(debug=True)
