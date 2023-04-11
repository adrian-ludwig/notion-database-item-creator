FROM node:16-alpine

LABEL maintainer="Adrian Ludwig <adrian@ludwig.net.pl>"

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY src .

CMD ["node", "api.js"]
