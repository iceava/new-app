# stage 1
FROM node:latest as node
WORKDIR /new-app
COPY . .
RUN npm install


# stage 2
FROM nginx:alpine
COPY --from=node /new-app/target/classes/static /usr/share/nginx/html
