# Dockerfile
FROM node:7

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --loglevel http

# Bundle app source
COPY . /usr/src/app

# Build and optimize react app
ENV NODE_ENV production
RUN npm run build

EXPOSE 9000

# defined in package.json
CMD [ "npm", "run", "server" ]
