#!/usr/bin/python3
""" Starts a Flask web application """
import uuid
from models import storage
from models.state import State
from models.place import Place
from models.amenity import Amenity
from flask import Flask, render_template
app = Flask(__name__)


@app.teardown_appcontext
def close_db(error):
    """ Close SQLAlchemy Session """
    storage.close()


@app.route('/2-hbnb', strict_slashes=False)
def hbnb():
    """ main page to hbnb! """
    states = storage.all(State).values()
    states = sorted(states, key=lambda k: k.name)
    state_list = []

    for state in states:
        state_list.append([state, sorted(state.cities, key=lambda k: k.name)])

    amenities = storage.all(Amenity).values()
    amenities = sorted(amenities, key=lambda k: k.name)

    places = storage.all(Place).values()
    places = sorted(places, key=lambda k: k.name)

    return render_template('2-hbnb.html',
                           states=state_list,
                           amenities=amenities,
                           places=places,
                           cache_id=uuid.uuid4())


if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5000)