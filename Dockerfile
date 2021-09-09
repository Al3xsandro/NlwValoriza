FROM node:alpine

WORKDIR /usr/attackz

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn build

CMD yarn start:prod