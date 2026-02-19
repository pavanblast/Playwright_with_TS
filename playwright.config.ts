import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'node:path';


function loadEnv(env: string) {
  dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });
}

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  fullyParallel: true,
  retries: 0,

  globalSetup: require.resolve('./tests/global.setup'),

  projects: [
    {
      name: 'qa',
      use: (() => {
        loadEnv('qa');
        return {
          browserName: 'chromium',
          channel: 'chrome',
          headless: false,
          trace: 'on',
          video: 'on',
          screenshot: 'on',

          baseURL: process.env.BASE_URL,
          storageState: 'state/qa.json',
          viewport: null,

          launchOptions: {
            args: ['--start-maximized'],
            slowMo: 500,
          },

          actionTimeout: 30000,
          navigationTimeout: 30000,
        };
      })(),
    },

    {
      name: 'non-prod',
      use: (() => {
        loadEnv('non-prod');
        return {
          browserName: 'chromium',
          channel: 'chrome',
          headless: false,
          trace: 'on',
          video: 'on',
          screenshot: 'on',

          baseURL: process.env.BASE_URL,
          storageState: 'state/non-prod.json',
          viewport: null,

          launchOptions: {
            args: ['--start-maximized'],
            slowMo: 500,
          },

          actionTimeout: 30000,
          navigationTimeout: 30000,
        };
      })(),
    },

    {
      name: 'prod',
      use: (() => {
        loadEnv('prod');
        return {
          browserName: 'chromium',
          channel: 'chrome',
          headless: false,
          trace: 'on',
          video: 'on',
          screenshot: 'on',

          baseURL: process.env.BASE_URL,
          storageState: 'state/prod.json',
          viewport: null,

          launchOptions: {
            args: ['--start-maximized'],
            slowMo: 500,
          },

          actionTimeout: 30000,
          navigationTimeout: 30000,
        };
      })(),
    },
  ],
});
