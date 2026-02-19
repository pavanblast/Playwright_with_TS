import { LoginPage } from '../pages/loginpage';
import { Page } from '@playwright/test';

class LoginSteps {

  page: Page;
  loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async login_with_valid_credentials() {
    await this.loginPage.login_with_valid_credentials();
  }

  async login_with_invalid_credentials() {
    await this.loginPage.login_with_invalid_username_password();
  }
}

export { LoginSteps };
