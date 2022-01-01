FROM node:14.18 AS builder
COPY package-lock.json package.json .
RUN npm install --production
COPY ./src ./src
COPY ./public ./public
RUN npm run build

FROM nginx:1.21.5
COPY --from=builder ./build ./usr/share/nginx/html
EXPOSE 80