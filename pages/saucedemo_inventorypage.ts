import { Page } from "@playwright/test";

class SauceDemoInventoryPage {

  page: Page;
  productList: any;
  productItems: any;
  cartBadge: any;
  cartLink: any;
  sortDropdown: any;
  menuButton: any;
  logoutLink: any;

  constructor(page:Page) {
    this.page = page;
    this.productList = page.locator('.inventory_list');
    this.productItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.menuButton = page.locator('[data-test="menu-button"]');
    this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
  }

  // async isInventoryPageDisplayed() {
  //   try {
  //     await this.productList.waitFor({ state: 'visible', timeout: 5000 });
  //     return true;
  //   } catch {
  //     return false;
  //   }
  // }

  async getProductByName(productName:string) {
    // Use exact text match for more reliable finding
    return this.page.locator('.inventory_item', {
      has: this.page.locator('.inventory_item_name', { hasText: new RegExp(`^${productName}$`) })
    });
  }

  async addProductToCart(productName:string) {
    const product = await this.getProductByName(productName);
    // Wait for product to be visible
    await product.first().waitFor({ state: 'visible' });
    const addButton = product.first().locator('button:has-text("Add to cart")');
    await addButton.waitFor({ state: 'visible' });
    await addButton.click();
  }

  async removeProductFromCart(productName:string) {
    const product = await this.getProductByName(productName);
    await product.first().waitFor({ state: 'visible' });
    const removeButton = product.first().locator('button:has-text("Remove")');
    await removeButton.waitFor({ state: 'visible' });
    await removeButton.click();
  }

  async getCartItemCount() {
    try {
      const count = await this.cartBadge.textContent();
      return Number.parseInt(count);
    } catch {
      return 0;
    }
  }

  async clickCart() {
    await this.cartLink.click();
  }

  async sortProducts(sortOption:string) {
    await this.sortDropdown.selectOption(sortOption);
  }

  async getProductNames() {
    const names = [];
    const items = await this.page.locator('.inventory_item_name').all();
    for (const item of items) {
      names.push(await item.textContent());
    }
    return names;
  }

  async getProductPrices() {
    const prices = [];
    const items = await this.page.locator('.inventory_item_price').all();
    for (const item of items) {
      prices.push(await item.textContent());
    }
    return prices;
  }

  async logout() {
    await this.menuButton.waitFor({ state: 'visible' });
    await this.menuButton.click();
    await this.logoutLink.waitFor({ state: 'visible' });
    await this.logoutLink.click();
  }
}

export { SauceDemoInventoryPage };
