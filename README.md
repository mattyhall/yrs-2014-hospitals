# Hospital Finder
Hospital Finder is a web application which can be used to compare hospitals. Often you will be given a choice of where you want to have treatment and this web application provides a means for you to choose based on patient ratings, staffing levels, infection rates and other information.

It is written in Python and Javascript. The code is fairly well commented and readable, so feel free to take a look

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
