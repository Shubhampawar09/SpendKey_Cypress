
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
        "charts": true,
        "reportPageTitle": 'Spendkey Reports',
        "embeddedScreenshots": true,
        "quite": true,
        "overwrite": true,
        "json": true,
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      // require('cypress-json-results')({
      //   on,
      //   "overwrite": true,
      // })
    },
     baseUrl :'https://demo.spendkey.app/dashboard',
  },
  env: {
    DEFAULT_USER_EMAIL: "abhishek@cloudaeon.net",
    DEFAULT_USER_PASSWORD: "Abhishek@123456"
  }, 
});

