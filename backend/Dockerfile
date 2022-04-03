FROM node:14.6.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8081
CMD [ "npm", "run", "start" ]