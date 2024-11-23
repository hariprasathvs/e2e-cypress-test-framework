const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e//**/*.spec.{js,ts,jsx,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
