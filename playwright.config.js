// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1200, height: 750 },
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 1200, height: 750 },
      }
    },
    {
        name: 'Desktop Firefox',
        use: {
            browserName: 'firefox',
            viewport: { width: 1200, height: 750 },
        }
    },
    // Test against mobile viewports.
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5'],
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
  use: {
      headless: true,
      baseURL: 'https://twitter.com/',
      contextOptions: {
          offline: false,
      }
  }
};

module.exports = config;