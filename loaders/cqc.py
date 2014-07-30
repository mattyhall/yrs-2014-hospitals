import csv
import models

def load_cqc():
    reader = csv.DictReader(open('data/cqc.csv'))
    for row in reader:
        pc = row['Postal Code']
        place = models.Place.query.filter_by(postcode=pc).first()
        if place is not None:
            print('Got place ' + place.name)
            p_services = models.PlaceServices(place)
            models.db.session.add(p_services)
            for key, val in row.items():
                if key.startswith('Regulated activity') or key.startswith('Service type'):
                    b = val.strip() == 'Y'
                    service = models.Service(key, b, p_services)
                    models.db.session.add(service)
    models.db.session.commit()


