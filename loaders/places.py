'''
Load places from a csv file into a database. Get the coordinates for a postcode
'''

import concurrent.futures
import csv
import models
import requests

def get_lat_lng(postcode):
    r = requests.get('http://uk-postcodes.com/postcode/search', params={'format': 'json', 'q': postcode})
    json = r.json()
    if 'error' in json:
        print(json)
        return None
    else:
        return (json['geo']['lat'], json['geo']['lng'])

def load_place(row):
    name = row['name']
    tel = row['tel']
    street = row['street']
    locality = row['locality']
    region = row['region']
    postcode = row['postcode']
    lat, lng = get_lat_lng(postcode)
    print(name,tel,street,locality,region,postcode,lat,lng)
    # make an instance of the model for this data
    place = models.Place(name, tel, street, locality, region, postcode, lat, lng)
    return place

def load_places():
    reader = csv.DictReader(open('data/places.csv'))
    # thread pool so we can get the data concurrently
    with concurrent.futures.ThreadPoolExecutor(max_workers=50) as executor:
        futures = [executor.submit(load_place, row) for row in reader]
        for future in futures:
            try:
                res = future.result()
                models.db.session.add(res)
            except Exception as e:
                # If we get an exception, just print it out. We can always retry
                # this row later
                print(e)
    # save changes to the database. Could do this after creating every model
    # but this would slow things down considerably
    models.db.session.commit()
