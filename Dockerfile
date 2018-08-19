FROM node:latest

# Create app directory
WORKDIR /scalemusicapi

#RUN npm install nodemon -g
# Install app dependencies
COPY package.json /scalemusicapi

COPY . /scalemusicapi

RUN npm install
#RUN npm run start
# Bundle app source


EXPOSE 8080
CMD [ "npm", "start" ]
