#Base Image
#FROM cypress/base:18.12.0

FROM cypress/included:12.3.0

#create a folder Spendkey_cypress in container 
RUN mkdir /cypress-docker

#we make it oue working directory
WORKDIR /cypress-docker

#let's copy the essential files that we must used to run our scripts
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress 

#Install cypress dependencies in the work directory
RUN npm install

ENTRYPOINT ["npm", "run"]

RUN npx cypress run chrome:test

VOLUME [ "/cypress/videos:/cypress-docker/cypress/videos" ]
VOLUME [ "/cypress/reports:/cypress-docker/cypress/reports" ]

# RUN npx cypress run --config baseUrl=https://demo.spendkey.app/dashboard
