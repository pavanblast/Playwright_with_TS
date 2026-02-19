import { Page } from '@playwright/test';
import { LogoutPage } from '../pages/logoutpage';

export class LogoutSteps {
  page: Page;
  logoutPage: LogoutPage;
  
  constructor(page: Page) {
    this.page = page;
    this.logoutPage = new LogoutPage(page);
  }

  async logout() {
    await this.logoutPage.logout();
  }
}
