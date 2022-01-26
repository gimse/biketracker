# Biketracker website frontend

## Getting Started Locally
- Install Nodejs
- `cp .env_example .env`
- `npm install`
- `npm start`

## Getting Started Docker
- Install Docker
- `cp .env_example .env`
- Ensure Docker have access to at least 3GB memory. 
- `docker build -t biketracker-frontend . && docker run --rm --env-file .env --name biketracker-frontend -p 43955:80 biketracker-frontend`
- Test that it works at http://localhost:43955
- Stop with:
    - `docker stop biketracker-frontend`

## Deploy to Kubenestes
- The image is build a [Github Action](https://github.com/gimse/biketracker/actions/workflows/main-website.biketracker-frontend.yaml). Check that you have access.