import { Page } from '@playwright/test';
import { PlaceOrderPage } from '../pages/place_order_page';

export class PlaceOrderSteps {
  page: Page;
  placeOrderPage: PlaceOrderPage;

  constructor(page: Page) {
    this.page = page;
    this.placeOrderPage = new PlaceOrderPage(page);
  }

  async place_order() {
    await this.placeOrderPage.placeOrder();
  }
}
