import models
import csv

def load_reviews():
    reader = csv.DictReader(open('data/hospital-comments-and-responses.csv'))
    for row in reader:
        place = models.Place.query.filter_by(name=row['Org Name']).first()
        if place:
            review = models.Review(place, row['Comment Title '], row['Liked'],
                row['Disliked'], row['Advice'])
            models.db.session.add(review)
    models.db.session.commit()
