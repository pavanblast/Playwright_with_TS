import { chromium, FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'node:path';
import fs from 'node:fs';
import { LoginPage } from '../pages/loginpage';

async function globalSetup(config: FullConfig) {

  console.log("🔥 GLOBAL SETUP STARTED");

  
  const cli = process.argv.join(' ').toLowerCase();

  let selectedProjects = config.projects;

  if (cli.includes('--project')) {
    selectedProjects = config.projects.filter(p =>
      cli.includes(p.name.toLowerCase())
    );
  }

  for (const project of selectedProjects) {

    const name = project.name.toLowerCase();
    let envFile = '';

    if (name === 'qa') envFile = '.env.qa';
    else if (name === 'prod') envFile = '.env.prod';
    else if (name === 'stage') envFile = '.env.stage';

    console.log(`\n🌍 Running setup for: ${name}`);

    const envPath = path.resolve(process.cwd(), envFile);

    console.log("ENV PATH:", envPath);
    console.log("ENV EXISTS:", fs.existsSync(envPath));

    console.log("ENV FILE:", envFile);
    console.log("BASE_URL:", process.env.BASE_URL);
    console.log("USERNAME:", process.env.USERNAME);
    console.log("PASSWORD:", process.env.PASSWORD);


    // clear old env first
    delete process.env.BASE_URL;
    delete process.env.USERNAME;
    delete process.env.PASSWORD;

    // load env
    dotenv.config({
      path: envPath,
      override: true,
    });

    console.log("BASE_URL:", process.env.BASE_URL);
    console.log("USERNAME:", process.env.USERNAME);

    if (!process.env.BASE_URL || !process.env.USERNAME) {
      console.log("❌ ENV NOT LOADED. Check .env location");
      continue;
    }

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      const login = new LoginPage(page);
      await login.login_with_valid_credentials();

      await context.storageState({
        path: `state/${name}.json`,
      });

      console.log(`✅ Storage created: state/${name}.json`);

    } catch (err) {
      console.log(`❌ Login failed for ${name}`, err);
    }

    await browser.close();
  }
}

export default globalSetup;
