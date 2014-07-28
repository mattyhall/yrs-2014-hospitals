from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hospitals.db'
db = SQLAlchemy(app)

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

    def __init__(self, name, tel, st, lo, re, pc, lat, lng):
        self.name = name
        self.telephone = tel
        self.locality = lo
        self.region = re
        self.postcode = pc
        self.lat = lat
        self.lng = lng

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

