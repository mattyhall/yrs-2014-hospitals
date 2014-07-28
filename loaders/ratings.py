import csv
import models
import codecs
def to_float(s):
    if s.strip() == '':
        return -1
    else:
        return float(s)

def load_ratings():
    with open('data/hospital-overall-ratings.csv', 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
           row = {unicode(k): unicode(v) for k,v in row.items()}
           place = models.Place.query.filter_by(name=row['Org Name']).first()
           if place is not None:
               print(row['Org Name'], place.name)
               rating = models.Rating(place, to_float(row['Cleanliness']), 
                                             to_float(row['Doctors and Nurses Worked well']), 
                                             to_float(row['Dignity and Respect']), 
                                             to_float(row['Involved with Decisions']), 
                                             to_float(row['Recommended']), 
                                             to_float(row['Not Recommended']))
               models.db.session.add(rating)
        print('Commit')
        models.db.session.commit()
            

if __name__ == '__main__':
    load_ratings()
