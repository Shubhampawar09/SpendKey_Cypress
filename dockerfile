#base image
FROM cypress/included:12.3.0

#create a folder Spendkey_cypress in container 
RUN mkdir /cypress-docker

#we make it oue working directory
WORKDIR /cypress-docker

#let's copy the essential files that we must used to run our scripts
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./docker-compose.yml .
COPY ./Utils.js .
COPY ./cypress ./cypress 

#install cypress dependencies in the work directory
RUN npm install

#entrypoint
ENTRYPOINT ["npm", "run"]

#docker run command
#RUN npm run api-test
#RUN npm run chrome:test

#store the reports in local
# VOLUME [ "/cypress/videos:/cypress-docker/cypress/videos" ]
# VOLUME [ "/cypress/reports:/cypress-docker/cypress/reports" ]

