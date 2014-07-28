import concurrent.futures
import requests
from bs4 import BeautifulSoup
import csv
import time

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
    return {'tel': telephone, 'street': street, 'locality': locality, 'region': region, 'postcode': postcode}

def search(url):
    r = requests.get(url)
    html = BeautifulSoup(r.text)
    if html.find(id='org-title') is not None:
        return load_place_website(html)
    else:
        results = html.find(class_='fcdisambiguation')
        if results is None:
            return None
        else:
            r = requests.get(BASE + results.find('a').get('href'))
            html = BeautifulSoup(r.text)
            return load_place_website(html)

def load_places():
    writer = csv.DictWriter(open('data/places.csv', 'w'), ['name', 'tel', 'street', 'locality', 'region', 'postcode'])
    with open('data/hospital-overall-ratings.csv', 'r') as f:
        reader = csv.DictReader(f)
        names = [row['Org Name'] for row in reader]
        with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
            futures = {name: executor.submit(search, BASE + '/Service-Search/Disambiguation/Organisation?serviceName=' + name) for name in names}
            for name, future in futures.items():
                res = future.result()
                if res != None:
                    res['name'] = name
                    writer.writerow(res)

if __name__ == '__main__':
    load_places()
            
