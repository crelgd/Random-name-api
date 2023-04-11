import requests
import json

responce = requests.get('http://localhost:3000/random-name')

s = responce.json()

print(s['value'])
