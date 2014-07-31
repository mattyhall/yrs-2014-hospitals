from flask import render_template, request
import json
from models import db, app, Place, Rating, PlaceServices, PatientSafety
from models import WaitingTimes, Review
import requests

@app.template_filter()
def round(i):
    # XXX: I am a terrible, terrible person
    return '{:.2f}'.format(i)

@app.template_filter()
def integer_to_rating(i):
    '''Filter that turns a rating number (1,2,3) to a string'''
    if i == 1:
        return 'Bad'
    elif i == 2:
        return 'Medium'
    elif i == 3:
        return 'Good'
    return 'No data available'


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

    # if we didn't get a result search the places
    place = Place.query.filter(Place.name.like(q)).first()
    if place is not None:
        return json.dumps({'lat': place.lat, 'lng': place.lng, 'status': 'ok'})

    # if we didn't get a place result search postcodes
    r = requests.get('http://uk-postcodes.com/postcode/search', params={
        'format': 'json', 'q': q})
    j = r.json()
    if not 'error' in j:
        # add a status so the client knows we succeeded
        j['geo']['status'] = 'ok'
        return json.dumps(j['geo'])

    return json.dumps({'status': 'error'})

@app.route('/place/<id>')
def place(id):
    '''Get the information for a place'''
    # Here we do pass some information to the template. Grabbing all of the data
    # through javascript would be a bit more difficult
    place = Place.query.filter_by(id=id).first()
    rating = Rating.query.filter_by(place=place).first()
    services = PlaceServices.query.filter_by(place=place).first()
    safety = PatientSafety.query.filter_by(place=place).first()
    waiting_times = WaitingTimes.query.filter_by(place=place).first()
    reviews = Review.query.filter_by(place=place).all()
    return render_template('place.html', place=place, rating=rating,
        services=services, safety=safety,
        waiting_times=waiting_times, reviews=reviews)

@app.route('/compare', methods=['POST'])
def compare():
    '''Compare a number of places'''
    # every checkbox has an id/name that starts with "place". The value is the
    # id of the place we want
    place_ids = [v for k, v in request.form.items() if k.startswith('place')]
    places = [Place.query.filter_by(id=id).first() for id in place_ids]
    headers = ['Cleanliness', 'Staff worked well', 'Dignity and respect',
        'Involved with decisions', 'Number of services', 'Infection control',
        'Checking for blood clots', 'Staff rating', 'Safe staffing %',
        'Average service waiting time (weeks)']
    # each row is for a hospital
    rows = []
    for place in places:
        row = {}
        row['name'] = place.name
        row['id'] = place.id
        rating = Rating.query.filter_by(place=place).first()
        row['cleanliness'] = rating.cleanliness
        row['staff']= rating.staff_worked_well
        row['dignity'] = rating.dignity_respect
        row['involved'] = rating.involved_with_decision
        safety = PatientSafety.query.filter_by(place=place).first()
        row['safety'] = safety
        place_services = PlaceServices.query.filter_by(place=place).first()
        if place_services is None:
            row['number_of_services'] = None
        else:
            # we need to make sure this service is offered, so only count it if
            # the value is true
            row['number_of_services'] = len(
                [service for service in place_services.services
                         if service.value])
        waiting_times = WaitingTimes.query.filter_by(place=place).first()
        row['waiting_times'] = waiting_times
        rows.append(row)
    return render_template('compare.html', rows=rows, headers=headers)

if __name__ == '__main__':
    app.run(debug=True)
