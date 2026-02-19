/*import { test as base, Page } from '@playwright/test';
import { LoginSteps } from './steps/loginsteps';
import { SauceDemoData } from './datafiles/saucedemo_data';

type MyFixtures = {
  login: Page;
};

export const test = base.extend<MyFixtures>({
  login: async ({ browser }, use) => {
    console.log('=== LOGIN ONCE PER RUN ===');
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(SauceDemoData.BASE_URL);
    await page.context().storageState({ path: 'state.json' });



    const loginSteps = new LoginSteps(page);
    await loginSteps.login(
      SauceDemoData.VALID_USERNAME,
      SauceDemoData.VALID_PASSWORD
    );

    await use(page);

    console.log('=== WORKER END ===');

    //await context.close();
  },
});*/
