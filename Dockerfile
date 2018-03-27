FROM node:latest
LABEL author=<emanuelbalcazar13@gmail.com>

ADD ./src src
WORKDIR ./src
RUN npm install
CMD node ./server.js