from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Flask backend is working!"})

@app.route('/books/')
def books():
    return jsonify([{"id": 1, "title": "Test Book", "author": "Test Author"}])

@app.route('/reviews/')
def reviews():
    return jsonify([{"id": 1, "content": "Test review", "rating": 5}])

if __name__ == '__main__':
    app.run(debug=True, port=5002)