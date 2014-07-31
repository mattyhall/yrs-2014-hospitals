# Hospital Finder
Hospital Finder is a web application which can be used to compare hospitals. Often you will be given a choice of where you want to have treatment and this web application provides a means for you to choose based on patient ratings, staffing levels, infection rates and other information.

## Code
It is written in Python and Javascript. The code is fairly well commented and readable, so feel free to take a look. A quick breakdown:

  * data/\*.csv - the datasets
  * models.py - the table definitions for the sqlite database
  * loaders/\*.py - populates the tables with data from csv files in data
  * hospitals.py - Flask website
  * templates/
    * base.html - base template. Includes the header and footer
    * index.html - template from home page. Uses very few template features as most of the heavy lifting is done by javascript (eg. populating the hospitals list, controling the map)
    * place.html & compare.html - most of the data is formatted using template features
  * static/js/
    * map\_and\_list.js - for the index page. Controls the map and filters the hospital list
    * bars.js - draws all the bar charts seen on the site

## Running
```
$ pip install flask requests flask-sqlalchemy
$ python hospitals.py
```

## Data Used
### Datasets
  * [Patient safety](http://www.nhs.uk/nhsengland/thenhs/patient-safety/pages/about-patient-safety.aspx)
  * [Overall ratings](http://www.nhs.uk/aboutNHSChoices/professionals/developments/Pages/NHSChoicesdatasets.aspx)
  * [Services provided](http://www.cqc.org.uk/content/how-get-and-re-use-cqc-information-and-data)

### APIs
  * [Postcodes](http://uk-postcodes.com/)
  * [Place search](http://www.geonames.org/)
