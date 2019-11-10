FROM node:10
COPY package.json /usr/src
WORKDIR /usr/src
RUN npm install
COPY . /usr/src
CMD [ "npm", "run", "start" ]
EXPOSE 8080