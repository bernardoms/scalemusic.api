FROM node:latest

# Create app directory
WORKDIR /scalemusicapi

# Install app dependencies
COPY package.json /scalemusicapi

COPY . /scalemusicapi

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
