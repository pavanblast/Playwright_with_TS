import { SauceDemoInventoryPage } from '../pages/saucedemo_inventorypage';
import { Page } from '@playwright/test';

class SauceDemoInventorySteps {

  page: Page;
  inventoryPage: SauceDemoInventoryPage;

  constructor(page: Page) {
    this.page = page;
    this.inventoryPage = new SauceDemoInventoryPage(page);
  }

  async verifyInventoryPageDisplayed() {
    return await this.inventoryPage.isInventoryPageDisplayed();
  }

  async addProductToCart(productName:string) {
    await this.inventoryPage.addProductToCart(productName);
  }

  async removeProductFromCart(productName:string) {
    await this.inventoryPage.removeProductFromCart(productName);
  }

  async getCartCount() {
    return await this.inventoryPage.getCartItemCount();
  }

  async goToCart() {
    await this.inventoryPage.clickCart();
  }

  async verifyProductVisible(productName:string) {
    const products = await this.inventoryPage.getProductNames();
    return products.some(p => p?.includes(productName));
  }

  async sortBy(sortOption: string) {
    await this.inventoryPage.sortProducts(sortOption);
  }

  async getProductNames() {
    return await this.inventoryPage.getProductNames();
  }

  async getProductPrices() {
    return await this.inventoryPage.getProductPrices();
  }

  async logout() {
    await this.inventoryPage.logout();
  }
}

export { SauceDemoInventorySteps };
