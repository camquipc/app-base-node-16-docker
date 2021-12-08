FROM node:14.18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install nodemon -g --quiet

COPY . .

EXPOSE 5000

CMD nodemon -L --watch . app.js
