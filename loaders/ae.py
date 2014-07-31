import models
import csv

def load_ae():
    reader = csv.DictReader(open('data/ae-data.csv'))
    i = 0
    for row in reader:
        places = models.Place.query.filter_by(org_code=row['Organisation Code']).all()
        for place in places:
            waiting_times = models.WaitingTimes.query.filter_by(place=place).first()
            if not waiting_times:
                waiting_times = models.WaitingTimes(place, None)
                models.db.session.add(waiting_times)
            treatment_time = None
            assess_time = None
            total_time = None
            try:
                treatment_time = int(row['TreatMedian'])
            except:
                pass
            try:
                assess_time = int(row['AssessMedian'])
            except:
                pass
            try:
                total_time = int(row['TotalMedian'])
            except:
                pass
            print(row['TotalMedian'], row['AssessMedian'], row['TreatMedian'])
            print(place.id, total_time, assess_time, treatment_time)
            if not total_time and not treatment_time and not assess_time:
                print('No data for', row['Organisation Code'])
            else:
                i += 1
                waiting_times.time_to_treatment_minutes = treatment_time
                waiting_times.total_time_in_ae = total_time
                waiting_times.emergency_assesment_time = assess_time
    print(i)
    models.db.session.commit()

