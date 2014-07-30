from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hospitals.db'
db = SQLAlchemy(app)

def counter(n):
    if n < 0 or n is None:
        return None
    else:
        return n

class Place(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75), unique=True)
    telephone = db.Column(db.String(20))
    street = db.Column(db.String(75))
    locality = db.Column(db.String(75))
    region = db.Column(db.String(75))
    postcode = db.Column(db.String(20))
    lat = db.Column(db.Float)
    lng = db.Column(db.Float)
    org_code = db.Column(db.String(20))
    site_code = db.Column(db.String(20))

    def __init__(self, name, tel, st, lo, re, pc, lat, lng):
        self.name = name
        self.telephone = tel
        self.locality = lo
        self.region = re
        self.postcode = pc
        self.lat = lat
        self.lng = lng

    def average_rating(self):
        rating = Rating.query.filter_by(place=self).first()
        sum = 0
        n = 0
        if rating.cleanliness > 0:
            sum += rating.cleanliness
            n += 1
        if rating.staff_worked_well > 0:
            sum += rating.staff_worked_well
            n += 1
        if rating.dignity_respect > 0:
            sum += rating.dignity_respect
            n += 1
        if rating.involved_with_decision > 0:
            sum += rating.involved_with_decision
            n += 1

        if n <= 0:
            return 'No rating'

        avg = sum / n
        # TODO: I am a terrible, terrible person
        return '{:.2f}'.format(sum / n)

    def to_dict(self):
        # we need to convert each place to json so that javascript can consume it
        # easily. To do this we must use python's basic types so we will convert
        # each place into a dictionary. We could probably have done a hack with
        # __dict__ but readability is more important that number of lines!
        return {'id': self.id, 'name': self.name, 'tel': self.telephone,
               'street': self.street, 'locality': self.locality,
               'region': self.region, 'postcode': self.postcode,
               'lat': self.lat, 'lng': self.lng,
               'rating': self.average_rating()}

class Rating(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    place_id = db.Column(db.Integer, db.ForeignKey('place.id'))
    place = db.relationship(Place, uselist=False)
    cleanliness = db.Column(db.Float)
    staff_worked_well = db.Column(db.Float)
    dignity_respect = db.Column(db.Float)
    involved_with_decision = db.Column(db.Float)
    recommend = db.Column(db.Integer)
    not_recommend = db.Column(db.Integer)

    def __init__(self, place, clean, staff, respec, involved, rec, not_rec):
        self.place = place
        self.cleanliness = clean
        self.staff_worked_well = staff
        self.dignity_respect = respec
        self.involved_with_decision = involved
        self.recommend = rec
        self.not_recommend = not_rec


class PlaceServices(db.Model):
    __tablename__ = 'place_services'

    id = db.Column(db.Integer, primary_key=True)
    place_id = db.Column(db.Integer, db.ForeignKey('place.id'))
    place = db.relationship(Place, uselist=False)
    services = db.relationship('Service', backref='place_services', lazy='dynamic')

    def __init__(self, place):
        self.place = place

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    value = db.Column(db.Boolean(), default=False)
    place_services_id = db.Column(db.Integer, db.ForeignKey('place_services.id'))

    def __init__(self, name, value, place_services):
        self.name = name
        self.value = value
        self.place_services = place_services

class PatientSafety(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    place_id = db.Column(db.Integer, db.ForeignKey('place.id'))
    place = db.relationship(Place, uselist=False)
    infection_control = db.Column(db.Integer)
    blood_clots = db.Column(db.Integer)
    recommended_by_staff = db.Column(db.Integer)
    safe_staffing = db.Column(db.Integer)

    def __init__(self, place, infection, clots, rec, staff):
        self.place = place
        self.infection_control = infection
        self.blood_clots = clots
        self.recommended_by_staff = rec
        self.safe_staffing = staff
