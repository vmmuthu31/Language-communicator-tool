
import os
from flask import Flask
from flask import jsonify
from requests import request
import backendmethod
from flask_cors import CORS


app=Flask(__name__) #Constructor which creates an instance of class Flask.
CORS(app)

@app.route('/<string:sentence_for_usr>/')
def displayUSR(sentence_for_usr):
    value=backendmethod.createUSR(sentence_for_usr)
    return jsonify(value)

if __name__ == '__main__':
    app.run(debug=True)
