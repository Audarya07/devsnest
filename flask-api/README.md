Flask app to demonstrate REST API
==============================

This is a simple demo of a task given in Devsnest's [`WEB DEV Intro | Python Flask Framework Basics`](https://www.youtube.com/watch?v=uK7pKciYRis&ab_channel=Devsnest)

* The only file to run is [`main.py`](main.py/)  
* The [`devsnest-flask-api.postman_collection.json`](devsnest-flask-api.postman_collection.json/)  can be imported as POSTMAN collection

## Install dependencies
`pip3 install -r requirements.txt`

## Run the app
`python3 main.py`

# REST API

## ADD A STRING

### Request [GET]

`GET /add/<your_string>`

### Response

    'your_string' succesfully stored via GET !

### Request [POST]

`POST /add`
 * *Data Format*:
     {"data":"helloWorld"}

### Response

    'helloWorld' succesfully stored via POST !

## Concat all available strings

### Request

`GET /concat`

### Response

    your_stringhelloWorld
