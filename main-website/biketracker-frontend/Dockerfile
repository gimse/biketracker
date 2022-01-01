FROM node:14.18  AS builder
COPY package-lock.json package.json .
RUN npm install --production
COPY ./src ./src
COPY ./public ./public
RUN npm run build

#FROM node:17-alpine3.12 
#RUN npm install -g serve
#COPY --from=builder ./build ./build
#CMD ["serve","-s","build","-l","43712"]