# Biketracker website frontend

## Getting Started Locally
- Install Nodejs
- `npm install`
- `npm start`

## Getting Started Docker
- Install Docker
- `docker build -t biketracker-frontend . && docker run --rm --name biketracker-frontend -p 43955:80 biketracker-frontend`
- Test that it works at http://localhost:43955
- Stop with:
    - `docker stop biketracker-frontend`

## Deploy to Kubenestes
- The image is build a [Github Action](https://github.com/gimse/biketracker/actions/workflows/main-website.biketracker-frontend.yaml). Check that you have access.
- `kubectl apply -f kubenetes-deployment.yaml -n biketracker`

## Production
- The path http://192.168.1.81:31865 is portforwardet to the public using the routers.
- The website should be avaliable at the router http://192.168.0.14:31865 when connected to the router connected to the internet 
- The connection is the portwrofared to the internet. Settings can be set in http://192.168.0.1/0.1
- The website should be avalaible at http://84.212.152.172:80 (as long as the public ip does not change)
- Eller http://sykkeldata.no 