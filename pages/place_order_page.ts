import { Page , expect} from '@playwright/test';
import { webData } from '../datafiles/web_data';
import { LOCATORS } from '../utils/locators';

class PlaceOrderPage {

    page:Page;

    constructor(page: Page) {
        this.page = page;
    }

    async placeOrder() {  
            await this.page.goto(webData.inventory_url);
            await this.page.getByRole('button', { name: LOCATORS.ADD_TO_CART_BUTTON }).nth(0).click();
            await this.page.locator(LOCATORS.SHOPPING_CART_LINK).click();
        
        
            await expect(this.page).toHaveURL(webData.cart_url);
            await this.page.getByRole('button', { name: LOCATORS.CHECKOUT_BUTTON }).click();
            await expect(this.page).toHaveURL(webData.checkout_step_one_url);
        
            await this.page.getByRole('textbox').first().fill(webData.test_first_name);
            await this.page.getByRole('textbox').nth(1).fill(webData.test_last_name);
            await this.page.getByRole('textbox').nth(2).fill(webData.test_zip_code);
        
            await this.page.getByRole('button', { name: LOCATORS.CONTINUE_BUTTON }).click();
            await expect(this.page).toHaveURL(webData.checkout_step_two_url);
            await this.page.getByRole('button', { name: LOCATORS.FINISH_BUTTON }).click();
            await expect(this.page).toHaveURL(webData.checkout_complete_url);
            await expect(this.page.locator(LOCATORS.COMPLETE_HEADER_LOCATOR)).toHaveText('Thank you for your order!');
    }

}
export { PlaceOrderPage };
