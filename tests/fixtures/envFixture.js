const base = require('@playwright/test');   // FULL playwright test module

// Extend test with envData
const test = base.test.extend({
  envData: async ({}, use, testInfo) => {
    await use(testInfo.project.use.envData);
  }
});

const expect = base.expect;

module.exports = { test, expect };
