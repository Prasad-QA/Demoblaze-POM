// @ts-check
import { defineConfig, devices } from '@playwright/test';
import envConfig from './tests/config/env.Config.js';

const selectedEnv = process.env.ENV || "qa";
console.log(`🔧 Running tests in environment: ${selectedEnv}`);

export default defineConfig({
  testDir: './tests',
  testMatch: ["tests/Pomtest.spec.js"],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 1,
  workers: process.env.CI ? 1 : 2,

  reporter: process.env.CI
    ? [["junit", { outputFile: "results.xml" }]]
    : [['list'], ['html'], ['json']], // ✅ console output

  use: {
    headless: process.env.CI ? true : false,
    // @ts-ignore - custom field
    envData: envConfig[selectedEnv],
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
