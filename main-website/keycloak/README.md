# Biketracker Keycloak
How to deploy and run Kyecloak for Autherization.

## Getting Started with Docker
- Install [Docker](https://www.docker.com)
- `docker run --rm -p 25756:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin --name biketracker-keycloak wizzn/keycloak:14`
- Open http://localhost:25756