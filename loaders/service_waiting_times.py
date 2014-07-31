import models
import csv

def load_service_waiting_times():
    reader = csv.DictReader(open('data/service_waiting_times.csv'))
    for row in reader:
        org_code = row['Org Code']
        places = models.Place.query.filter_by(org_code=org_code).all()
        if len(places) == 0:
            continue
        print(row['Org Code'])
        patient_total = int(row['Total patients waiting'])
        total = 0
        for k, v in row.items():
            if not k.endswith('weeks'):
                continue
            n = k.replace(' weeks', '')
            n = int(n)
            n += 0.5
            patients = 0
            if v.strip() != '':
                patients = int(v)
            total += patients * n
        avg = total / patient_total
        for place in places:
            waiting_times = models.WaitingTimes(place, avg)
            models.db.session.add(waiting_times)
    models.db.session.commit()
