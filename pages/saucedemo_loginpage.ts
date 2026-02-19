import { Page } from "playwright";

class SauceDemoLoginPage {
  page: Page;
  usernameInput: any;
  passwordInput: any;
  loginButton: any;
  errorMessage: any;
  loginLogo: any;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.loginLogo = page.locator('.login_logo');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async enterUsername(username:string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password:string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(username:string, password:string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async getErrorMessage() {
    await this.errorMessage.waitFor({ state: 'visible' });
    return await this.errorMessage.textContent();
  }

  async isErrorMessageVisible() {
    try {
      await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async isLoginPageDisplayed() {
    try {
      await this.loginLogo.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async clearUsername() {
    await this.usernameInput.clear();
  }

  async clearPassword() {
    await this.passwordInput.clear();
  }
}

export { SauceDemoLoginPage };
