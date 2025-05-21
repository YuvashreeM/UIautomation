import { defineConfig, devices } from '@playwright/test';
import { dot } from 'node:test/reporters';

export default defineConfig({

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        viewport: null, // disables Playwright's viewport control
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    }
  ],

  testMatch: ['cloudbees.spec.ts'],
  use: {
    baseURL: 'https://www.cloudbees.com/',
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  timeout: 120000,
  retries: 0,
  reporter: [
    ['html', { open: 'never' }], 
    ['json', { outputFile: 'jsonReporter/jsonReports.json' }],
    ['dot'],
    ['allure-playwright', {
      outputFolder: 'allure-results', 
    }],
    ['list'],
  ]
});


