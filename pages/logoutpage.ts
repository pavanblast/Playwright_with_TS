import { Page } from '@playwright/test';

class LogoutPage {

  public static readonly locatorStore = {
    user_options: ['#user-menu-btn-toggle', "text='User Menu'", "css=button[aria-label='Profile']"],
    signout: ["text='Sign out'", '#signout-btn', "button:has-text('Sign out')"]
  };

  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async options() {
    await this.page.waitForTimeout(1000);   // time.sleep(1)
    await this.page.locator(LogoutPage.locatorStore.user_options[0]).click();
  }

  async signOut() {
    await this.page.locator(LogoutPage.locatorStore.signout[0]).click();
  }

  async logout() {
    await this.options();
    await this.signOut();
  }
}

export { LogoutPage };
