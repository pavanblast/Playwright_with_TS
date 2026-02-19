import { SauceDemoLoginPage } from '../pages/saucedemo_loginpage';
import { Page } from 'playwright';

class SauceDemoLoginSteps {

  page: Page;
  loginPage: SauceDemoLoginPage;
  
  constructor(page: Page) {
    this.page = page;
    this.loginPage = new SauceDemoLoginPage(page);
  }

  async navigateToLoginPage() {
    await this.loginPage.navigate();
    return await this.loginPage.isLoginPageDisplayed();
  }

  async loginWithValidCredentials(username: string, password: string) {
    await this.loginPage.login(username, password);
  }

  async loginWithInvalidCredentials(username: string, password: string) {
    await this.loginPage.login(username, password);
  }

  async verifyErrorMessage(expectedError:string) {
    const errorMsg = await this.loginPage.getErrorMessage();
    return errorMsg.includes(expectedError);
  }

  async isErrorDisplayed() {
    return await this.loginPage.isErrorMessageVisible();
  }

  async verifyLoginPageDisplayed() {
    return await this.loginPage.isLoginPageDisplayed();
  }

  async enterUsernameOnly(username: string) {
    await this.loginPage.enterUsername(username);
  }

  async enterPasswordOnly(password: string) {
    await this.loginPage.enterPassword(password);
  }

  async clickLogin() {
    await this.loginPage.clickLoginButton();
  }
}

export { SauceDemoLoginSteps };
