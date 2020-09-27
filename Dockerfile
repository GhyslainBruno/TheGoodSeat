FROM node:10-alpine

RUN mkdir /app

COPY . /app/

WORKDIR /app/backend

RUN npm install

EXPOSE 1337

CMD ["node","app.js"]

