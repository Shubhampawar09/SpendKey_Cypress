
const { defineConfig } = require('cypress');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "reportPageTitle": 'Spendkey Reports',
    "embeddedScreenshots": true,
    "overwrite": true,
    
    "mochaFile": "cypress/reports/results.xml",
      "toConsole": false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
     baseUrl :'https://mvp-angular-app-service.azurewebsites.net/login'
  },
  env: {
    DEFAULT_USER_EMAIL: "s@gmail.com",
    DEFAULT_USER_PASSWORD: "ssss",
    snapshotOnly: true
  }, 
});

