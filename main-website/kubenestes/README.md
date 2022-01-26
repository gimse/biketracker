# Kubenestes Deployment
How to deploy the website to production in a kubenetes cluster.

# Getting Started
- `kubectl apply -f kubenetes-deployment.yaml -n biketracker`
- Edit the MAPTILER_URL env variable to match the ClusterIp to maptiler

## Front-end Routing
- The path http://192.168.1.81:43955 is portforwardet to the public using the routers .
- The website are avaivble at https://192.168.1.1:31865 on the cluster-router
- The website should be avaliable at the router http://192.168.0.14:31865 when connected to the router connected to the internet 
- The connection is the portwrofared to the internet. Settings can be set in http://192.168.0.1/0.1
- The website should be avalaible at http://84.212.152.172:80 (as long as the public ip does not change)
- Eller http://sykkeldata.no 