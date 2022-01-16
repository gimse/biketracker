# Enginx Setup for Autorization with Keyclaok

## Getting stared with Docker
- https://itnext.io/nginx-as-reverse-proxy-in-front-of-keycloak-21e4b3f8ec53 
- `biketracker-keycloak`
- http://localhost:8054
- http://localhost:8054/auth/

## Getting stared with Docker 2
- `docker run --rm -i -t --name nginx-mainline -p 16343:80 nginx:1.21`
- Open http://localhost:16343 

## Arternative solution:
Maybe use this approx instead: https://stackoverflow.com/questions/69423720/keycloak-on-kubernetes-behind-ingress-doesnt-work 
https://stackoverflow.com/questions/65548562/what-is-proper-design-for-authentication-in-kubernetes-using-nginx-ingress-and-k 