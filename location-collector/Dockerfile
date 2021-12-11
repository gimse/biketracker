FROM node:17-alpine3.12
COPY package-lock.json package.json ./
RUN npm install
COPY get_bike_locations.js .
CMD ["npm","start"]