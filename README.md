# Cypress-POC
This repository is for Spendkey cypress framework.

Website used is 'https://demo.spendkey.app/dashboard'

## Versions
1. Nodejs: 18.12.1
2. Cypress: 12.3.0

## Pre-requisites 

[Install Visual Studio](https://code.visualstudio.com/download#)

[Install github](https://git-scm.com/downloads)

[Install Node js](https://nodejs.org/en/download/)


1. Clone the repository using below command.

  [git clone](https://github.com/TestrigTechnologies/Cypress-POC/tree/spendkey-cypress-framework)
  
2. Open VS code and open above folder where you cloned the repository.
3. Now, open terminal in vs code and run below command to install all dependencies.
```bash
npm install
```
## Folder Structure
1. cypress/e2e - To store all spec files in which UI tests are written.
2. cypress/fixtures - To store test data files such as json.
3. cypress/reports - To store mocha awesome reports.
4. cypress/screenshots - To store screenshots of failed tests.
5. cypress/support/pageObjects - To store all page objects classes in which locators are stored.
6. cypress/support/Utilities - To store utility classes to resuse methods and functions.
7. cypress/support/command - To store resusable method such as Login.
8. cypress/support/e2e - To store global configurations which is used in framework.
9. cypress/videos - To store test execution videos.

## Running Tests

You can find commands to run in package.json folder
Note: Reports of Spec file which are executed using cypress runner will not available in reports folder.
1. To open cypress test runner, use below command
```bash
  npm run test
```
2. To run all spec files in headed mode and to generate report, use below command
```bash
  npm run regression-headed

3. To run all spec files in headless mode with the baseUrl and to generate report, use below command
```bash
   npx cypress run --config baseUrl=https://demo.spendkey.app/dashboard  

4. You can always find html report in cypress/reports folder. Open index.html in any browser to see the report.

5. Once the code is pushed in repo then github action will trigger immediately and will run the script on github actions

## Cypress folder directory

```bash
|--CYPRESS-POC
|    |--.github
|       |--buildspec.yaml
|    
|    |--cypress
|        |--downloads
|        
|        |--e2e
|             |--homepage-tests.cy.js
|             |--login-tests.cy.js
|        
|        |-fixtures
|             |--example.json
|        
|        |-reports
|          |--html
|             |--index.html
|        
|        |--screenshots
|             |--image.png
|        
|        |--support
|          |--pageObjects
|             |--HomePage.js
|             |--LoginPage.js
|          |--Utilities
|             |--Utils.js
|
|        |--videos
|             |--homepage.mp4
|             |--loginpage.mp4
|
|--.dockerIgnore
|--cypress.config.js
|--dockerfile
|--package-lock.json
|--package.json
|--ReadMe.md

## Docker Info
1. Docker file contains all the commands to build and run an image as a container.

2. All of the dependencies needed for the framework to execute will be installed in the docker image in the container once the
   image has been built.

3. Commands- 
    
    BUILD: The command docker build creates Docker files that produce images for eg: spendkey-cypress

        docker build -t spendkey-cypress .

    FROM: Informs Docker that we require the base image as cypress/included: 12.3.0
        
        FROM cypress/included:12.3.0

    RUN: At build time, this command is executed within the container. 
        
        RUN mkdir /cypress-docker

    COPY: Copy a file to the container from the same directory as the Dockerfile.

        COPY ./package.json .

    VOLUME: When specified in the Dockerfile, it can be externally mounted via the 
    host or a Docker data container.This means that the volume is created each time
    a container is launched from the image (empty).

        VOLUME [ "/cypress/reports:/cypress-docker/cypress/reports" ] 

4. The entire specfile will be executed in a container once the docker image has been generated. And after the execution is finished, the image will be destroyed.

## Github Actions
1. All the commands that will run during the github action are contained in the buildspec.yaml files.

2. When the code in the repository is pushed or pull request. Then, buildspec.yaml will execute all commands in github actions.
            
3. The github actions will show all workflow builds.

4. Reports will be published in the artefacts section of the build summary. Where we must download and extract the zip file.
