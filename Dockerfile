# Chrome 80 & Firefox 72
 
# pull image
FROM cypress/browsers:node13.6.0-chrome80-ff72
# make directory inside container
RUN mkdir /app
WORKDIR /app
# copy cypress code from host to container
COPY . /app
# execute the tests
RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --browser firefox
RUN $(npm bin)/cypress run --browser chrome


# base image
FROM node:14.15.4-alpine

# Create and change to the app directory.
WORKDIR /usr/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY . .

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
RUN npm ci --only=production

# Copy local code to the container image.

RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]