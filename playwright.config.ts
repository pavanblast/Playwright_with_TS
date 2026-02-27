import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  fullyParallel: true,
  retries: 0,

  globalSetup: require.resolve('./tests/global.setup'),

  projects: [
    {
      name: 'qa',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        storageState: 'state/qa.json',
        baseURL: process.env.BASE_URL
      },
    },

    {
      name: 'stage',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        storageState: 'state/stage.json',
        baseURL: process.env.BASE_URL
      },
    },

    {
      name: 'prod',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        storageState: 'state/prod.json',
        baseURL: process.env.BASE_URL
      },
    },
  ],
});
