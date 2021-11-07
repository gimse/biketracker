# Bike tracker
Used to track bikes in Oslo

# Online Apis
- [api.entur.io](api.entur.io)

## Setup
- Install Nodejs
- ``npm install``
- Install Docker
- Start a CoachDb instanse
    - ``docker run -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=<you_db_password> -d -p 5984:5984 couchdb:3.2.0``
    test: ``curl http://localhost:5984`` or ``http://localhost:5984/_utils``
- Copy and rename [.env_example](.env_example) to [.env](.env) and insert the COUCHDB_PASSWORD.

## Used packages
- ``npm install --save axios@0.24.0``

- ``npm install --save nano@9.0.5``

- ``npm install --save dotenv@10.0.0``

- ``npm install --save py-logging@2.5.1``