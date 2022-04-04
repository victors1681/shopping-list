FROM node:14.5.0-alpine
WORKDIR /usr/src/ui
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start"]