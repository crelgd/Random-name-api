import requests
import json

responce = requests.get('http://localhost:7836/random-name')

s = responce.json()

print(s['value'])
