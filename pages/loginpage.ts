import { Page,expect } from "@playwright/test";
import { SauceDemoData } from "../datafiles/saucedemo_data";
import { LOCATORS } from "../utils/locators";

class LoginPage {


  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login_with_valid_credentials() {
      await this.page.goto(SauceDemoData.BASE_URL);
      expect(this.page.url()).toBe(SauceDemoData.BASE_URL);
      expect(this.page.getByRole('textbox', { name: LOCATORS.USERNAME_INPUT })).toBeVisible();
      expect(this.page.getByRole('textbox', { name: LOCATORS.PASSWORD_INPUT })).toBeVisible();
      expect(this.page.getByRole('button', { name: LOCATORS.LOGIN_BUTTON })).toBeVisible();

      expect(this.page.getByRole('textbox', { name: LOCATORS.USERNAME_INPUT })).toBeVisible();
      expect(this.page.getByRole('textbox', { name: LOCATORS.PASSWORD_INPUT })).toBeVisible();
      expect(this.page.getByRole('button', { name: LOCATORS.LOGIN_BUTTON })).toBeVisible();

      await this.page.getByRole('textbox', { name: LOCATORS.USERNAME_INPUT }).fill(process.env.USERNAME);
      await this.page.getByRole('textbox', { name: LOCATORS.PASSWORD_INPUT }).fill(process.env.PASSWORD);
      await this.page.getByRole('button', { name: LOCATORS.LOGIN_BUTTON }).click();
  }

  async login_with_invalid_username_password() {
      await this.page.goto(SauceDemoData.BASE_URL);
      expect(this.page.url()).toBe(SauceDemoData.BASE_URL);
      expect(this.page.getByRole('textbox', { name: LOCATORS.USERNAME_INPUT })).toBeVisible();
      expect(this.page.getByRole('textbox', { name: LOCATORS.PASSWORD_INPUT })).toBeVisible();
      expect(this.page.getByRole('button', { name: LOCATORS.LOGIN_BUTTON })).toBeVisible();

      await this.page.getByRole('textbox', { name: LOCATORS.USERNAME_INPUT }).fill(SauceDemoData.INVALID_USERNAME);
      await this.page.getByRole('textbox', { name: LOCATORS.PASSWORD_INPUT }).fill(SauceDemoData.INVALID_PASSWORD);
      await this.page.getByRole('button', { name: LOCATORS.LOGIN_BUTTON }).click();
  }
}

export { LoginPage };
