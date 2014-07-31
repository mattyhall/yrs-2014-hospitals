from loaders import ratings, places, patient_safety, cqc, service_waiting_times
import models

# create the tables in hospitals.db
models.db.create_all()

# load the places. This must be done before ratings as ratings reference
# places. This could take some time as it queries uk-postcodes.com to find
# coords for postcodes
places.load_places()

ratings.load_ratings()

patient_safety.load_patient_safety()

cqc.load_cqc()

service_waiting_times.load_service_waiting_times()
