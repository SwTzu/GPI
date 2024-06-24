from flask import Flask, request, jsonify
from flask_cors import CORS
import game_assets
import json
from fuzzywuzzy import process

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


data_storage = {}

selected_composition = {}

isopen = {
    "League_state": False
    }

comando_actual = {
    'comando': '',
    'estado': 'pending'  # Puede ser 'pending', 'completed' u otro estado que necesites
}

@app.route('/api/data', methods=['PUT'])
def update_data():
    data = request.json
    if data:
        data_storage.update(data)  # Sobrescribe los datos existentes
        return jsonify({"message": "Data updated successfully"}), 200
    return jsonify({"error": "No data received"}), 400

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(data_storage), 200



@app.route('/api/receive_data', methods=['PUT'])
def receive_data():
    data = request.json
    if data:
        selected_composition.update(data)  # Sobrescribe los datos existentes
        return jsonify({"message": "Data updated successfully"}), 200
    return jsonify({"error": "No data received"}), 400

@app.route('/api/get_composition', methods=['GET'])
def get_selected_composition():
    return jsonify(selected_composition), 200


@app.route('/api/isopen', methods=['PUT'])
def update_isopen_state():
    data = request.json
    if data:
        isopen.update(data)  # Sobrescribe los datos existentes
        return jsonify({"message": "Data updated successfully"}), 200
    return jsonify({"error": "No data received"}), 400

@app.route('/api/isopen', methods=['GET'])
def get_isopen_state():
    return jsonify(isopen), 200



if __name__ == '__main__':
    app.run(debug=True, port=5000)
