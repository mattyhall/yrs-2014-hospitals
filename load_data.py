from loaders import ratings, places
import models

models.db.create_all()

places.load_places()
ratings.load_ratings()
