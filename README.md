# Cypress-POC
This repository is for Cypress POC to demo cypress framework.

Demo website used is 'https://demo.spendkey.app/dashboard'


## Pre-requisites 
1. Install Visual studio code latest version on your local machine if not installed already.
https://code.visualstudio.com/download#
2. Install git if not installed already.
https://git-scm.com/downloads
3. Install node js latest version.
https://nodejs.org/en/download/
## Installation


1. Clone the repository using below command.

```bash
  git clone https://github.com/TestrigTechnologies/Cypress-POC.git
```
2. Open VS code and open above folder where you cloned the repository.
3. Now, open terminal in vs code and run below command to install all dependencies.
```bash
npm install
```
## Folder Structure
1. cypress/e2e - To store all spec files in which UI tests are written.
2. cypress/fixtures - To store test data files such as json.
3. cypress/reports - To store mocha awesome reports after regression test.
4. cypress/screenshots - To store screenshots of failed tests.
5. cypress/support/pageObjects - To store all page objects classes in which locators are stored.
6. cypress/support/Utilities - To store utility classes to resuse methods and functions.
7. cypress/support/command - To store resusable method such as Login.
8. cypress/support/e2e - To store global configurations which is used in framework.
9. cypress/videos - To store test execution videos.

## Running Tests

You can find commands to run in pacakge.json folder
Note: Reports of Spec file which are executed using cypress runner will not available in reports folder.
1. To open cypress test runner, use below command
```bash
  npm run test
```
2. To run all spec files in headless mode and to generate report, use below command
```bash
  npm run regression
```
3. To run all spec files in headed mode and to generate report, use below command
```bash
  npm run regression-headed
```
4. You can always find html report in cypress/reports folder. Open index.html in any browser to see the report.




