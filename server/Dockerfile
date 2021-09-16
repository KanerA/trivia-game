# syntax=docker/dockerfile:1

FROM node:14
ENV NODE_ENV=production
ENV SQL_PASSWORD=K#assaf14
ENV SQL_DATABASE=trivia
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3001
CMD [ "npm", "start"]