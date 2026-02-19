import { chromium, FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'node:path';
import { LoginPage } from '../pages/loginpage';

async function globalSetup(config: FullConfig) {

  // get project from CLI
  const cliArgs = process.argv.join(' ');
  console.log("CLI:", cliArgs);

  let projectsToRun = config.projects;

  // if specific project passed
  if (cliArgs.includes('--project')) {
    projectsToRun = config.projects.filter(p =>
      cliArgs.toLowerCase().includes(p.name.toLowerCase())
    );
  }

  for (const project of projectsToRun) {

    const projectName = project.name.toLowerCase();
    let envFile = '';

    if (projectName === 'qa') envFile = '.env.qa';
    else if (projectName === 'non-prod') envFile = '.env.non-prod';
    else if (projectName === 'prod') envFile = '.env.prod';

    console.log(`\n🌍 Setting up: ${projectName.toUpperCase()}`);
    console.log(`📁 ENV: ${envFile}`);

    dotenv.config({
      path: path.resolve(process.cwd(), envFile),
      override: true,
    });

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      const loginPage = new LoginPage(page);
      await loginPage.login_with_valid_credentials();

      await context.storageState({
        path: `state/${projectName}.json`,
      });

      console.log(`✅ Storage created for ${projectName}`);

    } catch (err) {
      console.error(`❌ Login failed for ${projectName}`, err);
    }

    await browser.close();
  }
}

export default globalSetup;
