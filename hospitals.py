from models import db, app

@app.route("/hi")
def hi():
    return 'hi'

app.run()
