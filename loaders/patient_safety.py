import models
import csv

def rating_to_int(s):
    s = s.strip()
    if s == 'Green':
        return 3
    elif s == 'Blue':
        return 2
    elif s == 'Red':
        return 1
    else:
        return None

def load_patient_safety():
    reader = csv.DictReader(open('data/patient-safety-complete-data.csv'))
    for row in reader:
        place = models.Place.query.filter_by(site_code=row['Site Code']).first()
        if place is not None:
            infection = rating_to_int(row['Infection control and cleanliness'])
            clots = rating_to_int(row['Patients assessed for blood clots'])
            recommended = rating_to_int(row['Recommended by staff'])
            staff = row['Safe staffing'].replace('%', '')
            safety = models.PatientSafety(place, infection, clots,
                recommended, staff)
            models.db.session.add(safety)
    models.db.session.commit()
