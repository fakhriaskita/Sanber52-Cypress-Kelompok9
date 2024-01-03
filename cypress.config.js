const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 15000,
    viewportWidth: 1200,
    viewportHeight: 680
  },
});
