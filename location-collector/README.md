# Bike tracker
Used to track bikes in Oslo

![Build status](https://github.com/gimse/biketracker/actions/workflows/github-actions-demo.yml/badge.svg)
## Online Apis Used
- [api.entur.io](api.entur.io)

## Setup (Local)
- Install Nodejs
- ``npm install``
- Install Docker
- Start a CoachDb instanse: ``docker run -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=<you_db_password> -d -p 5984:5984 couchdb:3.2.0``
- Test CoachDb: [http://localhost:5984/_utils](http://localhost:5984/_utils)
- Copy and rename [.env_example](.env_example) to [.env](.env) and insert the COUCHDB_PASSWORD.
- ``node get_bike_locations.js``
## Used packages
- ``npm install --save axios@0.24.0``

- ``npm install --save nano@9.0.5``

- ``npm install --save dotenv@10.0.0``

- ``npm install --save py-logging@2.5.1``

## Setup (Docker local)
- Install [Docker](https://www.docker.com)
- Copy and rename [.env_example](.env_example) to [.env](.env) and insert the COUCHDB_PASSWORD.
- ``docker build -t bike-tracker . && docker run --name bike-tracker -it --rm --env-file .env bike-tracker```
- nb: It will fail to connect to the db.

## Kubernetes
- Create namespace ``kubectl create namespace biketracker``
- Set active namespace ``kubectl config set-context --current --namespace=biketracker``
- Add iamge pull secret (if needed): ``kubectl create secret docker-registry regsecret --docker-server=ghcr.io/gimse --docker-username=${kube} --docker-password=${PW_STRING} --docker-email=${my@email.com} ``

- ``kubectl apply -f kubernetes_deployment.yaml``
- Check that the database is up at [http://192.168.1.91:5984/_utils/#](http://192.168.1.91:5984/_utils/#).
