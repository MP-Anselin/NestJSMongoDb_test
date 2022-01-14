FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "run","start:dev" ]