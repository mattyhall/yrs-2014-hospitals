'''
A file which will go through each place in data/hospital-overall-ratings.csv
and scrape the postcode from http://www.nhs.uk/Service-Search. This should be
run by typing:

$ python loaders/generate_places.py

if there is no data/places.csv file
'''

import concurrent.futures
import requests
from bs4 import BeautifulSoup
import csv

BASE = 'http://nhs.uk'

def get_text(element):
    if element is None:
        return ''
    return element.text

def load_place_website(html):
    telephone = get_text(html.find(property='telephone'))
    street = get_text(html.find(property='streetAddress'))
    locality = get_text(html.find(property='addressLocality'))
    region = get_text(html.find(property='addressRegion'))
    postcode = get_text(html.find(property='postalCode'))
    print(telephone, street, locality, region, postcode)
    return {'tel': telephone, 'street': street, 'locality': locality,
            'region': region, 'postcode': postcode}

def search(url):
    r = requests.get(url)
    html = BeautifulSoup(r.text)
    if html.find(id='org-title') is not None:
        # if the search redirected us straight to the correct page because
        # there was a single result then parse that page
        return load_place_website(html)
    else:
        # otherwise find the first element with fcdis... class, get the link
        # and parse that page
        results = html.find(class_='fcdisambiguation')
        if results is None:
            return None
        else:
            # the href is a relative url, so we need to add base to it
            r = requests.get(BASE + results.find('a').get('href'))
            html = BeautifulSoup(r.text)
            return load_place_website(html)

def load_places():
    # create a csv writer. The headings will be written in the order shown
    writer = csv.DictWriter(open('data/places.csv', 'w'),
                            ['name', 'tel', 'street', 'locality', 'region',
                             'postcode'])
    with open('data/hospital-overall-ratings.csv', 'r') as f:
        reader = csv.DictReader(f)
        # go through each row and extract the name
        names = [row['Org Name'] for row in reader]
        # create a thread pool so that we can run the requests concurrently
        extension = '/Service-Search/Disambiguation/Organisation?serviceName='
        with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
            # for every place create a future which will hold the result of
            # calling search for that place
            futures = {name: executor.submit(search, BASE + extension + name)
                       for name in names}
            for name, future in futures.items():
                res = future.result()
                if res != None:
                    # search will return all the values needed apart from the
                    # name of the place. Add this in and write the row
                    res['name'] = name
                    writer.writerow(res)

if __name__ == '__main__':
    load_places()
