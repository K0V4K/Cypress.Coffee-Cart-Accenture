const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
require('dotenv').config(); 

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://coffee-cart.app",
    specPattern: "**/*.feature",
    testIsolation: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000, 
    
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      config.env.BASE_URL = process.env.BASE_URL;
      config.env.SECRET_PASSWORD = process.env.SECRET_PASSWORD;
      config.env.API_TOKEN = process.env.API_TOKEN;
      
      return config;
    },
  },
});