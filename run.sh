#!/bin/bash

# Command to run the Python script
cd ./fast-api-education
pip install -r requirements.txt
python3 app/main.py &

# Command to run the TypeScript project
cd ../app_form
npm install
npm start
